import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Activity } from '../../types'

type Props = {
  data: Activity[]
}

export default function Chart({ data }: Props) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='withdrawal'
          stroke='#8884d8'
          strokeWidth='2'
        />
        <Line
          type='monotone'
          dataKey='deposit'
          stroke='#82ca9d'
          strokeWidth='2'
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
