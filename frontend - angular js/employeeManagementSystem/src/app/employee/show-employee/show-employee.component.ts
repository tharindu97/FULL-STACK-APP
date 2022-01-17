import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

  EmployeeList: any = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getEmployeetList();
  }

   // Get Emolyee Details
   getEmployeetList(){
    this.service.getApi("/Employee").subscribe(data => {
      this.EmployeeList = data;
    });
  }

}
