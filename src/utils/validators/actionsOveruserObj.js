export const modifyUserObj = (items, itemField, actionField, modifications) => {
  return items.map(item => item[itemField] === actionField ? {...item, ...modifications} : item)
}