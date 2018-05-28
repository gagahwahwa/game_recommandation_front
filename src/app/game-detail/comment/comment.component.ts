import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CommentService } from '../../shared/service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentFormGroup: FormGroup;
  comments$: Observable<any>;
  game_id: number;
  user_id: number;
  rate: number;

  starRateArray: Array<string>;

  basicComment: string[] = [
    '정말 최악이에요!!',
    '최악이에요!',
    '싫어요!',
    '재미없어요',
    '별로예요.',
    '부족해요.',
    '보통이에요.',
    '할만해요.',
    '재미있어요.',
    '훌륭해요.',
    '최고예요!'
  ];

  constructor(private commentService: CommentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.game_id = this.route.snapshot.params.gameId;
    this.user_id = +sessionStorage.getItem('id');
    this.comments$ = this.commentService.getComments(this.game_id);
    this.rate = 0;

    // formGroup 선언
    this.commentFormGroup = this.fb.group({
      comment: [''] // 댓글 내용
    });
  }

  registerComment(formGroup: FormGroup) {
    // 백엔드로 댓글 전송
    if (this.rate === 0) {
      alert('별점을 입력해주세요');
    } else {
      this.commentService.postComment({
        game_id: this.game_id,
        user_id: this.user_id,
        rate: this.rate,
        comment: formGroup.controls.comment.value
      }).subscribe((res: any) => {
        if (res.result === 'success') { // 성공시
          // form reset
          formGroup.reset();
          // star-rate-bar reset
          this.rate = 0;
          // 페이지 리로드
          this.comments$ = this.commentService.getComments(this.game_id);
        }
      });
    }
  }

  // 인자 수정 요망
  deleteComment(formGroup: FormGroup) {
    // DB로 삭제할 댓글 전송
  }

  // 평점 -> 별점 계산
  cal_star_rate(rate: number) {
    this.starRateArray = new Array(5).fill('star_border');
    if (rate !== 0) {
      const half = rate % 1;
      this.starRateArray.fill('star', 0, (rate - half));
      if (half === 0.5) {
        this.starRateArray.fill('star_half', (rate - half), (rate + 1));
      }
    }
    return this.starRateArray;
  }

}
