vehicles = [
  {
    make: 'toyota',
    color: 'red',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 113312,
    isUsed: true,
  },
  {
    make: 'toyota',
    color: 'blue',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 324312,
    isUsed: true,
  },
  {
    make: 'toyota',
    color: 'yellow',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 113452,
    isUsed: false,
  },
  {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  {
    make: 'mazda',
    color: 'grey',
    engine: 'v8',
    type: 'sedan',
    year: 2021,
    mileage: 0,
    isUsed: false,
  },
  {
    make: 'ford',
    color: 'green',
    engine: 'v8',
    type: 'truck',
    year: 2008,
    mileage: 25467,
    isUsed: true,
  },
]
houses = [
  {
    stories: 2,
    door: 'blue',
  },
  {
    stories: 3,
    door: 'blue',
  },
  {
    stories: 2,
    door: 'green',
  },
]

// function countByValue(collection, iteratee) {

// }
let houses_colors = houses.map((house) => house.door)
let house_store = {}
houses_colors.map((h) => {
  if (h in house_store) {
    house_store[h] += 1
  } else {
    house_store[h] = 1
  }
})

function countByValue(collection, iteratee) {
  let coll_store = {}
  collection
    .map((val) => val[iteratee])
    .map((value) =>
      value in coll_store ? (coll_store[value] += 1) : (coll_store[value] = 1)
    )
  return coll_store
}

// console.log(houses_colors)
// console.log(house_store)
console.log(countByValue(houses, 'door'))
console.log(countByValue(vehicles, 'make'))
