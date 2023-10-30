import { Color as ColorType } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<ColorType[]> => {
  try {
    const res = await fetch(URL)
    return res.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export default getColors
