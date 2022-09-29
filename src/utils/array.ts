export const toArray = (value: number) => {
  const result = []
  for(let i = 0; i < value; i++){
    result.push(null)
  }
  return result
}