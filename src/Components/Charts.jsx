import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, BarChart, Bar } from 'recharts';
import Marks from '/public/Marks.json'

const Charts = () => {
    return (
        <div>
            <LineChart width={400} height={400} data={Marks}>
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
            </LineChart>

            <LineChart width={400} height={400} data={Marks}>
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="english" stroke="red" />
                {/* shows grid lines */}
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="id" />
                <YAxis />
                {/* Tooltip for interaction */}
                <Tooltip />
            </LineChart>

            <AreaChart width={500} height={400} data={Marks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="physics" stroke="pink" fill="pink" />
                <Area type="monotone" dataKey="english" stroke="purple" fill="purple" />
                <Area type="monotone" dataKey="biology" stroke="gray" fill="gray" />
            </AreaChart>

            <BarChart width={500} height={400} data={Marks}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="id" />
                <YAxis />
                <Bar dataKey="biology" fill="purple" />
                <Bar dataKey="math" fill="blue" />
            </BarChart>
        </div>
    );
};

export default Charts;