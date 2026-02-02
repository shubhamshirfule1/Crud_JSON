import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { CrudService } from '../service/crud-service';

@Component({
  selector: 'app-adduser',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser implements OnInit{

  router = inject(Router)
  AdduserForm!: FormGroup;
  formbuilder=inject(FormBuilder);
  service=inject(CrudService)
  ngOnInit(): void {
    this.AdduserForm=this.formbuilder.group({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl('')

    });
  }

  onSubmit(){
    const formdata = this.AdduserForm.value;
    this.service.createUser(formdata).subscribe(()=>{

      this.router.navigate(['/crud']);
    });


  }

  

}
