import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Dec 2020',
    'Old Customers': 4000,
    'New Customers': 2400,
    amt: 2400,
  },
  {
    name: 'Jan 2021',
    'Old Customers': 3000,
    'New Customers': 1398,
    amt: 2210,
  },
  {
    name: 'Feb 2021',
    'Old Customers': 2000,
    'New Customers': 9800,
    amt: 2290,
  },
  {
    name: 'Mar 2021',
    'Old Customers': 2780,
    'New Customers': 3908,
    amt: 2000,
  },
  {
    name: 'Apr 2021',
    'Old Customers': 1890,
    'New Customers': 4800,
    amt: 2181,
  },
  {
    name: 'May 2021',
    'Old Customers': 2390,
    'New Customers': 3800,
    amt: 2500,
  },
  {
    name: 'Jun 2021',
    'Old Customers': 3490,
    'New Customers': 4300,
    amt: 2100,
  },
]

export default function NewOldCustomers() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Old Customers' stackId='a' fill='#82ca9d' />
        <Bar dataKey='New Customers' stackId='a' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  )
}
