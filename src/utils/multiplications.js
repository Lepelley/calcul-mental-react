function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const findMultiply = () => {
  return { a: getRandomInt(10), b: getRandomInt(10) }
}

export default findMultiply
