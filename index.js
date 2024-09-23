const fs = require('fs')
const BSON = require('bson')

function BSON2JSON(from) {
  const buffer = fs.readFileSync(from)
  let index = 0
  const documents = []
  while (buffer.length > index) {
    index = BSON.deserializeStream(buffer, index, 1, documents, documents.length)
  }
  return documents
}

const bsonFilePath = 'input.bson'
const bson2json = BSON2JSON(bsonFilePath)
fs.writeFileSync('output.json', JSON.stringify(bson2json))
console.log('✅ Результат записан в output.json')
