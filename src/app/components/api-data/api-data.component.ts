import { Component } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { catchError,throwError  } from 'rxjs';


@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent {
  todo:any;
 constructor(private dataService:ApiDataService){

 }
 ngOnInit() {
  this.dataService.fetchData().pipe(
    catchError(error => {
      console.error('Error fetching data:', error);
      // Optionally, you can rethrow the error to propagate it to the subscriber
      return throwError('An error occurred while fetching data.');
    })
  )
  .subscribe(result => {
    this.todo = result;
    console.log(result);
  });
}
}
