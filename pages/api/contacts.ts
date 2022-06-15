import { NextApiRequest, NextApiResponse } from 'next'

const contacts = [
  { name: 'Marcus Johnson', online: true },
  { name: 'Kelly Smith', online: false },
  { name: 'Devin Cartwright', online: true },
  { name: 'Jo Smith', online: false },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ contacts })
}
