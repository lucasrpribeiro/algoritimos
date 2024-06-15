const binarySearch = function (list, item) {
  let min = 0
  let max = list.length - 1

  if (min <= max) {
    let mid = (min + max) / 2
    let guess = list[mid]

    if (guess === item){
      console.log(mid)
      return
    }
    if (guess > item){
      console.log(max = mid - 1)
      return
    }
    if (guess < item){
      console.log(min = mid + 1)
      return
    }
      console.log(null)
  }
}

const list = [1, 2, 3, 4, 5, 6, 7]

binarySearch(list, 4) // should return 3
binarySearch(list, 6) // should return 5
binarySearch(list, 2) // should return 1