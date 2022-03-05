const axios = require('axios')
const header = {
  headers: {
    Authorization: 'Bearer aSuperSecretKey'
  }
}

const getFiles = async () => {
  try {
    const getListFiles = await axios.get(
      'https://echo-serv.tbxnet.com/v1/secret/files',
      header
    )
    return getListFiles.data.files
  } catch (err) {
    return err.response.data
  }
}

module.exports = getFiles
