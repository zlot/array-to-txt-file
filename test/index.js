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

tape.test('it will populate txt file with given contents', t => {
  writeArrayToTxtFile(['👍', '✅', '😛'], testFilePath, err => {
    t.equal(fs.readFileSync(testFilePath, 'utf-8'), '👍\n✅\n😛\n')
    fs.unlinkSync(testFilePath) // remove test file
    t.end()
  })
})

tape.test('it will override txt file with given name, if it does exist', t => {
  writeArrayToTxtFile(['a','b','c'], testFilePath, err => {
    writeArrayToTxtFile(['d', 'e', 'f'], testFilePath, err => {
      t.equal(fs.readFileSync(testFilePath, 'utf-8'), 'd\ne\nf\n')
      fs.unlinkSync(testFilePath) // remove test file
      t.end()
    })
  })
})

tape.test('it will write Number type', t => {
  writeArrayToTxtFile([1,2,3], testFilePath, err => {
    t.equal(fs.readFileSync(testFilePath, 'utf-8'), '1\n2\n3\n')
    fs.unlinkSync(testFilePath) // remove test file
    t.end()
  })
})

