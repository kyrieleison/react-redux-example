export const addItem = (name, stock) => {
  return {
    type: 'ADD_ITEM',
    name,
    stock
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleItem = (id) => {
  return {
    type: 'TOGGLE_ITEM',
    id
  }
}
