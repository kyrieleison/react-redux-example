const item = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: (Date.now() + Math.floor(Math.random() * 999999)).toString(36),
        name: action.name,
        created_at: (new Date()).toLocaleString(),
        completed: false
      }
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'TOGGLE_ITEM':
      return state.map(t =>
        item(t, action)
      )
    default:
      return state
  }
}

export default items
