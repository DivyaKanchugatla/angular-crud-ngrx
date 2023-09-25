import { createAction,props } from "@ngrx/store";

export const loadProducts = createAction("[Products] Load Products");
export const loadProductsSuccess = createAction("[Products] Load Products Success",props<{products:any[]}>());
export const createProduct = createAction("[Products] Create Product",props<{product:any}>())
export const updateProduct = createAction("[Products] Update Product",props<{product:any}>())