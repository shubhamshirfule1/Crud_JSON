import { Component, inject, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { CrudService } from '../service/crud-service';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css',
})
export class Updateuser implements OnInit{

  id:any;
  updateuser:FormGroup;
  Userdata!:User;
  //userdata:User[]=[];
  fb=inject(FormBuilder);
  service=inject(CrudService);
  router = inject(Router);
  routes=inject(Router)
  activatedRouted = inject(ActivatedRoute);

  
constructor(){
   this.updateuser= this.fb.group({
    name:new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
  });
}


ngOnInit(): void {

  this.activatedRouted.paramMap.subscribe(data=>{
      this.id=data.get('id');
    })
    if(this.id){
      this.service.getUserByid(this.id).subscribe(data=>{
        this.updateuser = this.fb.group({
          'name': new FormControl(data.name),
          'username': new FormControl(data.username),
          'email': new FormControl(data.email),
          'mobile': new FormControl(data.mobile),
        })
        })
      
    }

    // this.updateuser.setValue({ id:this.Userdata.id,
    //   name:this.Userdata.name,
    //   username:this.Userdata.username,
    //   email:this.Userdata.email,
    //   mobile:this.Userdata.mobile
    // });

}

  onUpdate(){
    const formdata=this.updateuser.value;
    this.service.updateCrudUser(this.id,formdata).subscribe(()=>{
      this.router.navigate(['/crud'])

    })
  }

}
