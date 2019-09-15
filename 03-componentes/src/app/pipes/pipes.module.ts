import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlitroPipe } from './flitro.pipe';



@NgModule({
  declarations: [FlitroPipe],
  exports: [FlitroPipe]
})
export class PipesModule { }
