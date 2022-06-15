import { NextApiRequest, NextApiResponse } from 'next'

const desserts = [
  {
    id: 1,
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    id: 2,
    name: 'Ice Cream Sandwich',
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 2,
    name: 'Eclair',
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  },
  {
    id: 3,
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    id: 4,
    name: 'Gingerbread',
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 3.9,
  },
]

export async function getAllDesserts() {
  return desserts
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ desserts })
}
