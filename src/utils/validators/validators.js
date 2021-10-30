export const required = (value) => {
  if(value) return undefined 
  return "Fill the field"
} 
export const maxLengthCreator = (maxCount) => (value) => {
    if(value && value.length > maxCount) console.log(`Max length is ${maxCount}`)
    if(value && value.length > maxCount) return `Max length is ${maxCount}`
  return undefined
} 