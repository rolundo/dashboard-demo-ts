import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import { Typography } from '@material-ui/core'

import { getLineChartData } from '../../../pages/api/chart-data'
import { Sales } from '../../types'

export default function Chart() {
  const theme = useTheme()
  const [salesData, setSalesData] = useState<Sales[]>([])

  useEffect(() => {
    setSalesData(getLineChartData)
  }, [])

  return (
    <Fragment>
      <Typography>Today</Typography>
      <ResponsiveContainer>
        <LineChart
          data={salesData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey='time' stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position='left'
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.secondary,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type='monotone'
            dataKey='amount'
            stroke={theme.palette.secondary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Fragment>
  )
}
