import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter-pipe.pipe';



@NgModule({
  declarations: [ FilterPipePipe ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [ FilterPipePipe]
})
export class SharedModule { }
