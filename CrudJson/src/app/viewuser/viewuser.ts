import { Component, OnInit } from '@angular/core';
import {User} from '../entity/user';
import { CrudService } from '../service/crud-service';
import { inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewuser',
  imports: [],
  templateUrl: './viewuser.html',
  styleUrl: './viewuser.css',
})
export class Viewuser implements  OnInit{

id:any;
  Userdata!:User;
  service= inject(CrudService);
  activatedRoute =inject(ActivatedRoute);
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data=>{
       this.id = data.get('id');
    })


  this.service.getUserByid(this.id).subscribe(data=>{
    this.Userdata=data
  })


}
}
