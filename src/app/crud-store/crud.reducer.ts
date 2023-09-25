import { createReducer,on } from "@ngrx/store";
import { createProduct, loadProductsSuccess, updateProduct } from "./crud.actions";

export interface productsState {
    products:any[]
}
export const initialState:productsState = {
    products:[]
}
export const productReducer = createReducer(initialState,
    on(loadProductsSuccess,(state,{products})=>({...state,products:products})),
    on(createProduct,(state,{product})=>({...state,products:[...state.products,product]})),
    on(updateProduct,(state,{product})=>({...state,products:state.products.map((p)=>p.id === product.id ? product : p )})))
   