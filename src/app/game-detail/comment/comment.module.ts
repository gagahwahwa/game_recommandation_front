import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentService } from '../../shared/service/comment.service';
import { StarRateBarModule } from '../../shared/component/star-rate-bar/star-rate-bar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubstrPipe } from './substr.pipe';
@NgModule({
  imports: [
    CommonModule,
    StarRateBarModule,
    ReactiveFormsModule,
    ],
  exports: [CommentComponent],
  declarations: [CommentComponent, SubstrPipe],
  providers: [CommentService]
})
export class CommentModule { }
