import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function NewVisitors() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={50}
          outerRadius={70}
          fill='#8884d8'
          paddingAngle={5}
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
