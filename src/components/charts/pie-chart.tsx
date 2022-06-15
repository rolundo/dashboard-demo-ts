import React, { useEffect, useState } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

import { getPieChartData } from '../../../pages/api/chart-data'
import { GroupSales, IndividualSales } from '../../types'

export default function Chart() {
  const [groupSales, setGroupSales] = useState<GroupSales[]>([])
  const [individualSales, setIndividualSales] = useState<IndividualSales[]>([])

  useEffect(() => {
    const chartData = getPieChartData()
    setGroupSales(chartData.groupSales)
    setIndividualSales(chartData.individualSales)
  }, [])

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={400} height={400}>
        <Pie
          data={groupSales}
          dataKey='value'
          cx='50%'
          cy='50%'
          outerRadius={60}
          fill='#8884d8'
        />
        <Pie
          data={individualSales}
          dataKey='value'
          cx='50%'
          cy='50%'
          innerRadius={70}
          outerRadius={90}
          fill='#82ca9d'
          label
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
