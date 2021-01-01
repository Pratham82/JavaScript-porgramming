/*Assign Person to Occupation
You have two arrays. One shows the names of the people pa, while the other shows their occupation ja. Your task is to make an object displaying each person to their respective occupation.
  */

const assignPersonToJob = (pa, ja) => {
  let newObj = {}
  pa.map((person, i) => (newObj[person] = ja[i]))
  return newObj
}

const pa = ['Annie', 'Steven', 'Lisa', 'Osman']
const ja = ['Teacher', 'Engineer', 'Doctor', 'Cashier']
console.log(assignPersonToJob(pa, ja))
