import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productStatus: "hidden",
    state: {id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.',
    category: "men's clothing"}
}
export const storeData = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        productDetailStore: (state, actions) => { state.state = actions.payload },
        productDetailStatus: (state, actions) => {state.productStatus = actions.payload}
    },
})

export const { productDetailStore, productDetailStatus } = storeData.actions

export default storeData.reducer