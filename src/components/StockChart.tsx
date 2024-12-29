import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const historicalData = [
  { date: '1991-12', value: 1000 },
  { date: '1992-01', value: 2500 },
  { date: '1992-02', value: 3800 },
  { date: '1992-03', value: 4200 },
  { date: '1992-04', value: 4467 },
];

export function StockChart() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <h2 className="text-xl font-bold mb-4">BSE Sensex Historical Chart</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#991B1B" 
              strokeWidth={2}
              dot={{ fill: '#991B1B' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}