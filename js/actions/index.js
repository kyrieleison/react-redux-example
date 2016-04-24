export const addItem = (name) => {
  return {
    type: 'ADD_ITEM',
    name
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
