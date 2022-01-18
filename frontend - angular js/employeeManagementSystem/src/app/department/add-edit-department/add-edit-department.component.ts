import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() department: any;
  DepartmentId: string = '';
  DepartmentName: string = '';

  ngOnInit(): void {
    this.DepartmentId = this.department.DepartmentId;
    this.DepartmentName = this.department.DepartmentName;
  }

  addDepartment(){
    let createResponseBody = {
      'DepartmentName': this.DepartmentName
    };
    this.service.postApi("/Department", createResponseBody).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment(){
    let updateResponseBody = {
      'DepartmentId': this.DepartmentId,
      'DepartmentName': this.DepartmentName,
    };
    this.service.patchApi("/Department", updateResponseBody).subscribe(res => {
      alert(res.toString());
    });
  }

}
