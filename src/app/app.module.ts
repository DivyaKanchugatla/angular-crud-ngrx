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
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ApiDataComponent } from './components/api-data/api-data.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CrudOperationsComponent,
    ParentComponent,
    ChildComponent,
    ApiDataComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }), // Configure the root reducer
    EffectsModule.forRoot([ProductEffects]), // Register the effects
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
