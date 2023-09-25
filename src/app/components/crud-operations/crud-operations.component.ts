import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/crud-store/crud.actions';


@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent {
  products:any[] = []
  constructor(private store:Store){
}
ngOnInit(){
  this.store.dispatch(loadProducts())
  this.fetchProducts()
}
fetchProducts(){
   this.store.select((state:any)=>state.products).subscribe(data=>{
    console.log("Products List",data.products)
    console.log(Object.keys(data.products).length)
    this.products=data.products;
  }
   )
}
}
