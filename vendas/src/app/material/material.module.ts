import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({


  exports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,

  ],
})
export class MaterialModule { }
