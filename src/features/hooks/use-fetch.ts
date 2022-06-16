import { useEffect, useState } from 'react'
import axios from 'axios'
import { Comment } from '../../types'

export default function useFetch(url: string) {
  const [data, setData] = useState<Comment[]>([])

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data))
  }, [url])

  return [data]
}
