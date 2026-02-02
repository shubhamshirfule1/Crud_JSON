import { Routes } from '@angular/router';
import { CRUD } from './crud/crud';
import { Adduser } from './adduser/adduser';
import { Viewuser } from './viewuser/viewuser';
import { Updateuser } from './updateuser/updateuser';


export const routes: Routes = [
    {
        path:'crud',
        component:CRUD
    },
    {
        path:'adduser',
        component:Adduser
    },
    {
        path:'viewuser/:id',
        component:Viewuser
    },
    {
        path:'updateuser/:id',
        component:Updateuser
    },

    
    
];
