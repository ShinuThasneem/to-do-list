import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task';


@Injectable({
  providedIn: 'root'
})


 
export class CrudService {
  private url="http://localhost:3000/tasks"

  constructor(private http:HttpClient) { }
  GetAll(){
    return this.http.get(this.url)
  }

  AddTask(data:{task_name:string}){
    console.log(data)
    return this.http.post(this.url,data)
    console.log(data);
  }


EditTask(any:Task){
return this.http.put(this.url,Task)
}
DeleteTask(item:number){
  return this.http.delete(this.url+'/'+item)
}
  
}
