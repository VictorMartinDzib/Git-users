import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { CommentComponent } from './service/comment/comment.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    CommentComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class PagesModule { }
