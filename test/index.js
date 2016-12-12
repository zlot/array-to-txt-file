const tape = require('tape')
const fs = require('fs')
const writeArrayToTxtFile = require('../index')
const testFilePath = __dirname + '/test.txt'

tape.test('it creates a txt file with given name, if it does not exist', t => {
  writeArrayToTxtFile(['a', 'b', 'c'], testFilePath, err => {
    fs.access(testFilePath, err => {
      if(err) {
        console.error(err)
        t.fail()
      }
      fs.unlinkSync(testFilePath) // remove test file
      t.pass()
      t.end()
    })
  })
})
