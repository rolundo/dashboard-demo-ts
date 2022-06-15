const sales = [
  { time: '00:00', amount: 0 },
  { time: '03:00', amount: 300 },
  { time: '06:00', amount: 300 },
  { time: '09:00', amount: 320 },
  { time: '12:00', amount: 350 },
  { time: '15:00', amount: 1500 },
  { time: '18:00', amount: 1625 },
  { time: '21:00', amount: 2000 },
  { time: '24:00', amount: undefined },
]

export function getLineChartData() {
  return sales
}

const groupSales = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
const individualSales = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
]

export function getPieChartData() {
  return {
    groupSales,
    individualSales,
  }
}

const orders = [
  {
    date: '01-29-2021',
    name: 'John Samuels',
    ship_to: 'Los Angeles, CA',
    payment_method: 'VISA ⠀•••• 3998',
    sale_amount: 350.75,
  },
  {
    date: '01-29-2021',
    name: 'Tiffany Carter',
    ship_to: 'Gary, IN',
    payment_method: 'VISA ⠀•••• 4205',
    sale_amount: 95.23,
  },
  {
    date: '01-29-2021',
    name: 'Jeff Moore',
    ship_to: 'Chicago, IL',
    payment_method: 'MC ⠀•••• 3291',
    sale_amount: 1250.94,
  },
  {
    date: '01-29-2021',
    name: 'Sarah Chambers',
    ship_to: 'Detroit, MI',
    payment_method: 'AMEX ⠀•••• 2200',
    sale_amount: 150.32,
  },
  {
    date: '01-29-2021',
    name: 'Tony Porter',
    ship_to: 'Columbus, OH',
    payment_method: 'VISA ⠀•••• 9923',
    sale_amount: 1134.35,
  },
  {
    date: '01-29-2021',
    name: 'James Smith',
    ship_to: 'Portland, OR',
    payment_method: 'VISA ⠀•••• 2232',
    sale_amount: 985.79,
  },
]

export default function getOrders() {
  return orders
}

const activity = [
  {
    month: 'January',
    deposit: 2400,
    withdrawal: 4000,
  },
  {
    month: 'February',
    deposit: 1398,
    withdrawal: 3000,
  },
  {
    month: 'March',
    deposit: 9800,
    withdrawal: 2000,
  },
  {
    month: 'April',
    deposit: 2780,
    withdrawal: 3908,
  },
  {
    month: 'May',
    deposit: 4800,
    withdrawal: 1890,
  },
  {
    month: 'June',
    deposit: 3800,
    withdrawal: 2390,
  },
  {
    month: 'July',
    deposit: 4300,
    withdrawal: 3490,
  },
]

export function getActivity() {
  return activity
}
