import { createSlice } from '@reduxjs/toolkit'

export const formrSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    phone: '',
    position: '',
    avatar:''
  },
  reducers: {
    setName: (state,action) => {
return {
    ...state,
    name: action.payload
}
    },
    setEmail: (state,action) => {
    
return {
    ...state,
    email: action.payload
}},

setPhone: (state,action) => {
return {
    ...state,
    phone: action.payload
}},
setPosition: (state,action) => {
    return {
        ...state,
        position: action.payload
    }},
setAvatar: (state,action) => {
        return {
            ...state,
            avatar: action.payload
        }},

resetForm: (state, action) => {
 return {
    ...state,
    name: '',
    email: '',
    phone: '',
    position: ''

}},

}})
export const { setName, setEmail, setPhone, resetForm, setPosition, setAvatar } = formrSlice.actions
export default formrSlice.reducer
