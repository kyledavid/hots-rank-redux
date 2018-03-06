import listPositions from './listPositions.json'
// return true if coordinates fall within list boundaries
export const findPosition = (x,y) => {
  const listX = listPositions.x
  const listY = listPositions.y
  if (x >= listX.low && x <= listX.high) {
    console.log(y < listY['1'].high)
    if (y >= listY['1'].low && y <= listY['1'].high) {
      return 1
    } else if (y >= listY['2'].low && y <= listY['2'].high) {
      return 2
    } else if (y >= listY['3'].low && y <= listY['3'].high) {
      return 3
    } else if (y >= listY['4'].low && y <= listY['4'].high) {
      return 4
    } else if (y >= listY['5'].low && y <= listY['5'].high) {
      return 5
    }
  } else {
    return false
  }
}
