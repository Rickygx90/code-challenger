const checkHex = (hex) => {
  return /^[0-9A-F]+$/gi.test(hex)
}

const validateLine = (arrayLine, file) => {
  if (
    arrayLine.length === 4 &&
    arrayLine[0] === file &&
    typeof arrayLine[1] === 'string' &&
    !isNaN(arrayLine[2]) &&
    arrayLine[3].length === 32 &&
    checkHex(arrayLine[3])
  ) {
    return true
  }
  return false
}

module.exports = validateLine
