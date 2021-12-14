import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { RouterService } from '../services/router.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  formValue !: FormGroup;
  products:Array<Product>=[];
  taskData!:any;
   constructor( private formbuilder:FormBuilder) { }
   public minDate: Date = new Date ("12/12/2021");
     public maxDate: Date = new Date ("1/1/2050");
     public value: Date = new Date ("12/12/2021");
   ngOnInit(): void {
     this.formValue =this.formbuilder.group({
       taskno:[''],
       taskname:[''],
       taskdescription:['']
     })
     this.getAllTask();
   }
    postTaskDetails()
    {
     this.products.taskno=this.formValue.value.taskno;
      this.products.taskname=this.formValue.value.taskname;
      this.products.taskdescription=this.formValue.value.taskdescription;
    this.api.postTask(this.products)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added successfully")
      let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      this.getAllTask();
    },
    err=>{
      alert("something went wrong");
    
    })
 
    }
    getAllTask()
    {
      this.api.getTask()
      .subscribe(res=>{
        this.taskData=res;
 
      })
    }
    deleteTask(row:any){
      this.api.DeleteTask(row.id)
      .subscribe(res=>{
        alert("Employee Deleted")
        this.getAllTask();
      })
    }
    onEdit(row:any)
    {
      this.taskModelObj.id=row.id
      //this.taskModelObj.taskno=row.taskno;
      this.formValue.controls['taskno'].setValue(row.taskNo)
      this.formValue.controls['taskname'].setValue(row.taskname)
      this.formValue.controls['taskdescription'].setValue(row.taskdescription)
    }
    updateTaskDetails()
    {
     this.taskModelObj.taskno=this.formValue.value.taskno;
     this.taskModelObj.taskname=this.formValue.value.taskname;
     this.taskModelObj.taskdescription=this.formValue.value.taskdescription;
     this.api.updateTask(this.taskModelObj,this.taskModelObj.id)
     .subscribe(res=>{
       alert("Updated Successfully")
       let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      this.getAllTask();
     })
    }
   }