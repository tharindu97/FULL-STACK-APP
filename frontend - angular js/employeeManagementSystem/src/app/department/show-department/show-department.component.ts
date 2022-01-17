import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.scss']
})
export class ShowDepartmentComponent implements OnInit {

  DepartmentList: any = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getDepartmentList();
  }

  // Get Depaerment Details
  getDepartmentList(){
    this.service.getApi("/Department").subscribe(data => {
      this.DepartmentList = data;
    });
  }

}
