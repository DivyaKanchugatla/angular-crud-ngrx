import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CrudOperationsComponent } from './components/crud-operations/crud-operations.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './crud-store/crud.effects';
import { productReducer } from './crud-store/crud.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrudOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }), // Configure the root reducer
    EffectsModule.forRoot([ProductEffects]), // Register the effects
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
