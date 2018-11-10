//action types 
const LOG_IN = 'LOG_IN'

//action creators
export const _logIn = user => ({ action : LOG_IN, user})

//thunks


const initialState = {
    "_id": 4,
    "createdAt": "2018-11-10T19:55:29.850Z",
    "email": "mike@gmail.com",
    "name": "Mikey Smikey",
    "password": "mike", 
    "updatedAt": "2018-11-10T19:55:29.850Z",
}

const authReducer = (state= initialState, action) => {
  switch(action.type){
    case LOG_IN:
      return user
    default:
      return state
  }
}

export default authReducer