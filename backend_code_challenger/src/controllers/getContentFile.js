const axios = require('axios')
const validateLine = require('../utils/helpers')
const header = {
  headers: {
    Authorization: 'Bearer aSuperSecretKey'
  }
}

const getContentFile = async (fileName) => {
  try {
    const getContent = await axios.get(
      `https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`,
      header
    )
    const arrayLines = getContent.data.split(/\n/)
    const lines = []
    for (let i = 1; i < arrayLines.length; i++) {
      const arrayLine = arrayLines[i].split(',')
      if (validateLine(arrayLine, fileName)) {
        lines.push({
          text: arrayLine[1],
          number: Number(arrayLine[2]),
          hex: arrayLine[3]
        })
      }
    }
    return {
      file: fileName,
      lines
    }
  } catch (err) {
    return err.response.data
  }
}

module.exports = getContentFile
