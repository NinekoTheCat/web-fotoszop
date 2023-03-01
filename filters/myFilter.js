export function myFilter(imageData) {
  let imagedata_2 = imageData;
  for (let y = 0; y < imagedata_2.length; y++) {
    for (let x = 0; x < imagedata_2[y].length; x++) {
      imageData[y][x][0] =  imageData[x][y][0]
      imageData[y][x][1] =  imageData[x][y][1]
      imageData[y][x][2] =  imageData[x][y][2]
    }
  }
}