export type Linear = {
  data: {
    x: string
    y: number
  }[]
  id: string
}
export type RadialBar = {
  data: {
    x: string
    y: number
  }[]
  id: string
}
export type CirclePacking = {
  children: {
    name: string
    score: number
  }[]
}
export type TreeMap = {
  children: {
    children: {
      name: string
      score: number
    }[]
    name: string
  }[]
}
export type PieChart = {
  id: string
  label?: string
  value: string
}
