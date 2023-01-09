import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    items:[],
    status:null
}

const ProductsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    }
})

export default ProductsSlice.reducer