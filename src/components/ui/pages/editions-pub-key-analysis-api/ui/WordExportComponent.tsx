import { useState } from 'react'

import { Button } from 'antd'
import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
import PizZip from 'pizzip'

export const WordExportComponent = () => {
  const [data, setData] = useState({
    content: 'Содержание документа',
    title: 'Заголовок',
  })

  const generateDocument = async () => {
    try {
      // Загружаем шаблон документа (docx)
      const response = await fetch('/template.docx')
      const templateContent = await response.arrayBuffer()

      const zip = new PizZip(templateContent)
      const doc = new Docxtemplater(zip)

      // Заменяем переменные в шаблоне данными
      doc.setData({
        content: data.content,
        title: data.title,
      })

      // Генерируем документ
      doc.render()

      // Получаем сгенерированный документ в формате ArrayBuffer
      const generatedDoc = doc.getZip().generate({ type: 'blob' })

      // Сохраняем документ
      saveAs(generatedDoc, 'generatedDocument.docx')
    } catch (error) {
      console.error('Ошибка при генерации документа:', error)
    }
  }

  return (
    <div>
      <Button onClick={generateDocument}>Экспорт в Word</Button>
    </div>
  )
}
