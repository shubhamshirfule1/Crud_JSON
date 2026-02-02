import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../entity/user';
import { CrudService } from '../service/crud-service';
import {ActivatedRoute, Router, RouterModule,RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit{

  id:any;
  Userdata!:User;
  userdata:User[]=[];
  service=inject(CrudService);
  router = inject(Router);
  activatedRouted = inject(ActivatedRoute);
  ngOnInit(): void {


    this.activatedRouted.paramMap.subscribe(data=>{
      this.id=data.get('id');
    })
    if(this.id){
      this.service.getUserByid(this.id).subscribe(data=>{
        this.Userdata=data;
      })
    }


     this.service.getUserData().subscribe((data)=>{
      this.userdata=data;
    })
  }

  deleteUser(id:any){
    this.service.deleteById(id).subscribe(()=>{
      this.service.getUserData().subscribe((data)=>{
        this.userdata=data;
      })

  });
  }
  


  updateUser(id:any){

    this.router.navigate(['/updateuser',id]);

  }

}
