import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashbord = () => {
  const studentResults = [
    { id: 1, name: "John Smith", physics: 85, chemistry: 78, math: 92 },
    { id: 2, name: "Mary Johnson", physics: 92, chemistry: 89, math: 88 },
    { id: 3, name: "David Lee", physics: 76, chemistry: 82, math: 79 },
    { id: 4, name: "Julia Kim", physics: 90, chemistry: 85, math: 91 },
    { id: 5, name: "Alex Wong", physics: 81, chemistry: 79, math: 83 },
    { id: 6, name: "Samantha Chen", physics: 87, chemistry: 92, math: 90 },
    { id: 7, name: "Mike Rodriguez", physics: 78, chemistry: 80, math: 75 },
    { id: 8, name: "Emily Nguyen", physics: 93, chemistry: 88, math: 95 },
    { id: 9, name: "Daniel Park", physics: 85, chemistry: 84, math: 87 },
    { id: 10, name: "Megan Davis", physics: 22, chemistry: 90, math: 92 },
    { id: 11, name: "Jason Kim", physics: 82, chemistry: 79, math: 80 },
    { id: 12, name: "Linda Chen", physics: 91, chemistry: 0, math: 94 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={studentResults}>
        {/* <YAxis dataKey='id'/> */}

        <Line dataKey="physics" />
        <Line dataKey="math" stroke="#82ca9d" />
        <Line dataKey="chemistry" stroke="#fff000" />
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashbord;
