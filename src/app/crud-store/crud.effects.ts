// products.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../services/products.service'; // Create this service to handle API requests
import * as ProductActions from './crud.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) => of())
        )
      )
    )
  );


}
