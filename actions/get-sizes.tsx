import { Size as SizeType } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<SizeType[]> => {
  try {
    const res = await fetch(URL)
    return res.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export default getSizes
