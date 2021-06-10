var data = [
  {
    id: '1',
    links: [
      {
        id: 'Dn59y87PGhkJXpaiZ',
        type: 'article',
        fin: 20,
      },
      {
        id: 'PGhkJXDn59y87paiZ',
        type: 'article',
        fin: 20,
      },
    ],
  },
  {
    id: '2',
    links: [
      {
        id: 'GhkJXpaiZDn59y87P',
        type: 'article',
        fin: 24,
      },
    ],
  },
  {
    id: '3',
  },
]

// let res = data.filter((val) => val.links).map((val) => val.id)
let res = data
  .filter((val) => val.links)
  .map((val) => val.links)
  .map((val) => {
    for (let i = 0; i < val.length; i++) {
      console.log(val[i].id)
    }
  })

console.log(res)
// console.log(data.map(val => {
//   let val2 = val.links
//   return val2 // this is an array
// }).filter(val => val !== undefined).map((val,i) => val).map(val => val).map(val => {
//   for(let i =0; i<val.length; i++){
//     console.log(val[i].id);
//   }
// }));

// [
//   { id: '1', links: [ [Object], [Object] ] },
//   { id: '2', links: [ [Object] ] }
// ]

//   [
//     { id: 'Dn59y87PGhkJXpaiZ', type: 'article' },
//     { id: 'PGhkJXDn59y87paiZ', type: 'article' }
//   ],
//   [ { id: 'GhkJXpaiZDn59y87P', type: 'article' } ]

// Most efficient soln
// var result = data.filter((e) => e.links)
// .map((e) => e.links.map((link) => link.id))
// .reduce((a, b) => a.concat(b))
