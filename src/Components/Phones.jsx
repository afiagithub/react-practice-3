import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('Phone.json')
        .then(data => {
            const phonesData = data.data;
            const phoneWithPricePair = phonesData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: phone.price
                }
                return obj;
            })
            setPhones(phoneWithPricePair)
        });
    }, [])
    return (
        <div>
            <BarChart width={600} height={300} data={phones}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="id" />
                <YAxis />
                <Legend></Legend>
                <Tooltip></Tooltip>
                <Bar dataKey="price" fill="plum" />
            </BarChart>
        </div>
    );
};

export default Phones;