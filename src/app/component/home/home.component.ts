import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private crud:CrudService) { }
taskArr:any=[];


  ngOnInit(): void {
    this.ShowAll();
    // this.Add();
    // this.edit();
    // this.taskArr=[]
  
    
  }

ShowAll(){
  this.crud.GetAll().subscribe(
    res=>{
      console.log(res)
      this.taskArr=res
    
    },
    err=>console.log(err)
  )
  
}
Add(data:{task_name:string}){
  // alert(data.task_name)
  this.crud.AddTask(data).subscribe(
    res=>{
    
      console.log(res)
      this.taskArr=res
    },
    err=>console.log(err)
  )

  this.ShowAll();

}
// edit(){
// this.crud.EditTask().subscribe(
//   res=>{
//     console.log(res)
    
//   },
//   err=>
//   {
//     alert("Failed to delete task...!")
//   }
// )
// }

deleteTask(etask:number){
  this.crud.DeleteTask(etask).subscribe( 
    res=>{
    
    console.log(res)
    this.taskArr=res
  },
  err=>console.log(err))
  
}


}







