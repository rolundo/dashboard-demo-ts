import { AxiosError } from 'axios'

export type Contact = {
  name: string
  online: boolean
}

export type DrawerLink = {
  label: string
  path: string
  itemIndex: number
  nested?: string
}

export type Sales = {
  time: string
  amount: number | undefined
}

export type GroupSales = {
  name: string
  value: number
}

export type IndividualSales = {
  name: string
  value: number
}

export type Activity = {
  month: string
  deposit: number
  withdrawal: number
}

export type Option = {
  label: string
  value: string
}

export type Dessert = {
  name: string
  calories: number
  fat: number
  carbs: number
  protein: number
}

export type NotificationType = {
  title: string
  status: string
  message: string
}

export type Location = {
  _id: string
  latitude: number
  longitude: number
}

export type Customer = {
  _id: string
  name: string
  city: string
  state: string
  country: string
  orders: number
  spent: number
  latitude: number
  longitude: number
}

export type Metric = {
  id: number
  title: string
  content: string
  variant: string
  align: string
  buttonText: string
  width: number
}

export type Order = {
  date: string
  name: string
  ship_to: string
  payment_method: string
  sale_amount: number
}

export type UserState = {
  list: User[]
  status?: string
  error?: string
}

export type User = {
  id: number
  name: string
  email: string
  address: Address
}

export type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  get: Geo
}

export type Geo = {
  lat: string
  lng: string
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type Message = {
  username: string
  message: string
  time: Date
}
