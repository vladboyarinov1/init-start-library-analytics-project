// src/utils/saveJsonToWord.js
import { Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'

const createParagraphsFromJson = (data: any, level = 0): any => {
  const paragraphs = []

  if (typeof data === 'object' && data !== null) {
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object' && value !== null) {
        paragraphs.push(
          new Paragraph({
            children: [new TextRun({ bold: true, text: `${' '.repeat(level * 2)}${key}:` })],
          })
        )
        paragraphs.push(...createParagraphsFromJson(value, level + 1))
      } else {
        paragraphs.push(
          new Paragraph({
            children: [new TextRun({ text: `${' '.repeat(level * 2)}${key}: ${value}` })],
          })
        )
      }
    }
  } else {
    paragraphs.push(
      new Paragraph({ children: [new TextRun({ text: `${' '.repeat(level * 2)}${data}` })] })
    )
  }

  return paragraphs
}

export const saveWordDoc = async (jsonData: any, fileName = 'document.docx') => {
  const doc = new Document({
    sections: [
      {
        children: createParagraphsFromJson(jsonData),
        properties: {},
      },
    ],
  })

  const blob = await Packer.toBlob(doc)

  saveAs(blob, fileName)
}
