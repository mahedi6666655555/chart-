
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {

    let myArray = [
        { name: 'John', age: 25 },
        { name: 'Mary', age: 30 },
        { name: 'Bob', age: 35 },
        { name: 'Alice', age: 40 },
        { name: 'Peter', age: 28 },
        { name: 'Sarah', age: 42 },
        { name: 'Tom', age: 31 },
        { name: 'Emily', age: 37 },
        { name: 'David', age: 26 },
        { name: 'Karen', age: 11 }
    ];

    return (
        <div>
            <div>
                <BarChart width={500} height={500} data={myArray} >

                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey="age" ></YAxis>
                    <Bar dataKey="age" fill="#8888" />
                    <Bar dataKey="age" fill="#f555" />
                    
                    

                </BarChart>
            </div>
        </div>
    );
};

export default Chart;