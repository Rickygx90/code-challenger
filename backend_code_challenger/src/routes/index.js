const { Router } = require('express')
const router = Router()
const getFiles = require('../controllers/getFiles')
const getContentFile = require('../controllers/getContentFile')

router.get('/files/data', async (req, res) => {
  const fileToObject = []
  const files = await getFiles()
  for (const file of files) {
    const contentFile = await getContentFile(file)
    if (contentFile.file) {
      fileToObject.push(contentFile)
    } else {
      console.log(contentFile)
    }
  }
  res.status(200).json(fileToObject)
})

router.get('/files/list', async (req, res) => {
  const files = await getFiles()
  if (files.status !== 400) {
    res.status(200).json(files)
  } else {
    res.status(files.status).json(files)
  }
})

router.get('/file/data', async (req, res) => {
  const { fileName } = req.query
  const contentFile = await getContentFile(fileName)
  if (contentFile.file) {
    res.status(200).json(contentFile)
  } else {
    res.status(contentFile.status).json(contentFile)
  }
})

module.exports = router
