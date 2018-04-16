import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentService } from '../../shared/service/comment.service';
import { StarRateBarModule } from '../../shared/component/star-rate-bar/star-rate-bar.module';

@NgModule({
  imports: [
    CommonModule,
    StarRateBarModule
    ],
  exports: [CommentComponent],
  declarations: [CommentComponent],
  providers: [CommentService]
})
export class CommentModule { }
