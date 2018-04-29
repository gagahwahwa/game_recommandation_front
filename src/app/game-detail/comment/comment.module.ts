import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRateBarModule } from '../../shared/component/star-rate-bar/star-rate-bar.module';
import { CommentService } from '../../shared/service/comment.service';
import { CommentComponent } from './comment.component';
import { SubstrPipe } from './substr.pipe';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    StarRateBarModule,
    ReactiveFormsModule,
    ],
  exports: [CommentComponent],
  declarations: [CommentComponent, SubstrPipe],
  providers: [CommentService]
})
export class CommentModule { }
