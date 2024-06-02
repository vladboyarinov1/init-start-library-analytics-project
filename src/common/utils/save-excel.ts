import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'

const flattenObject = (obj: any, parent = '', res: any = {}) => {
  for (const key in obj) {
    const propName = parent ? `${parent}.${key}` : key

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], propName, res)
    } else {
      res[propName] = obj[key]
    }
  }

  return res
}

const flattenArray = (data: any) => data.map((item: any) => flattenObject(item))

const transformToVerticalFormat = (data: any) => {
  const transformedData: any = []

  data.forEach((item: any) => {
    for (const [key, value] of Object.entries(item)) {
      transformedData.push({ Property: key, Value: value })
    }
  })

  return transformedData
}

export const exportToExcel = (data: any, fileName = 'exportedData.xlsx') => {
  const flattenedData = Array.isArray(data) ? flattenArray(data) : [flattenObject(data)]
  const verticalData = transformToVerticalFormat(flattenedData)

  const worksheet = XLSX.utils.json_to_sheet(verticalData)
  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  })
  const blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
  })

  saveAs(blob, fileName)
}
