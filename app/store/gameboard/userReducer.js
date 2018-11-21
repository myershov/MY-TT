const initialState = []

export default function Users(state = initialState, action) {
  const u = {
    'get users': () => action.users,
    'add user': () => [...state, action.users],
  }
  return u[action.type] ? u[action.type]() : state
}
