const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const url = 'http://localhost:5000'
const file = 'test6.csv'

describe('Get all files data: ', () => {
  it('Should get all files data', (done) => {
    chai
      .request(url)
      .get("/files/data")
      .end(function (err, res) {
        if (err) console.log(err)
        console.log(res.body)
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('Get all files name: ', () => {
  it('Should get all files name', (done) => {
    chai
      .request(url)
      .get('/files/list')
      .end(function (err, res) {
        if (err) console.log(err)
        console.log(res.body)
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('Get a content file: ', () => {
  it('Should get file content', (done) => {
    chai
      .request(url)
      .get(`/file/data?fileName=${file}`)
      .end(function (err, res) {
        if (err) console.log(err)
        console.log(res.body)
        expect(res).to.have.status(200)
        done()
      })
  })
})