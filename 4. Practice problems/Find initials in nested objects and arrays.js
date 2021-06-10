// I have an array inside an array of objects that I want to retrieve a property from. I've accomplished it here, but it seems clunky. Is there a better way of looping through each StaffList array within each room

var data = {
  room: [
    {
      id: 1,
      StaffList: [
        {
          inroom: true,
          initials: 'MG',
        },
        {
          inroom: false,
          initials: 'CT',
        },
        {
          inroom: true,
          initials: 'MS',
        },
      ],
    },
    {
      id: 2,
      StaffList: [
        {
          inroom: true,
          initials: 'MG',
        },
        {
          inroom: false,
          initials: 'CT',
        },
        {
          inroom: true,
          initials: 'MS',
        },
        {
          inroom: true,
          initials: 'MA',
        },
      ],
    },
  ],
}

let res = data.room
  .map((val) => val.StaffList)
  .map((val) => {
    var final_initials = []
    for (let i = 0; i < val.length; i++) {
      for (let j = 0; j < val[i].length; j++) {
        console.log(val[i][j])
      }
      final_initials.push(val[i].initials)
    }
    return final_initials
  })

console.log(res)
