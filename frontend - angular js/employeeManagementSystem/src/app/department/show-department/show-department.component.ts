import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.scss']
})
export class ShowDepartmentComponent implements OnInit {

  DepartmentList: any = [];
  ModalTitle: string = '';
  ActivateAddEditDepComp: boolean = false;
  department:any;

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

  addClick(){
    this.department={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.department=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteApi("/Department/",item.DepartmentId).subscribe(res=>{
        alert(res.toString());
        this.getDepartmentList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.getDepartmentList();
  }


}
