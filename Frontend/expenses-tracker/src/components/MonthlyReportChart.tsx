import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', expense: 400, budget: 1000 },
  { name: 'Feb', expense: 600, budget: 1000 },
  { name: 'Mar', expense: 800, budget: 1000 },
  { name: 'Apr', expense: 1200, budget: 1000 },
  { name: 'May', expense: 900, budget: 1000 },
  { name: 'Jun', expense: 700, budget: 1000 },
  { name: 'Jul', expense: 500, budget: 1000 },
];

const MonthlyReportChart = () => {
  return (
    <div className="w-full bg-white rounded-lg p-4 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
            labelStyle={{ fontWeight: 'bold' }}
          />
          <Line 
            type="monotone" 
            dataKey="expense" 
            stroke="#8884d8" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="budget" 
            stroke="#82ca9d" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyReportChart;