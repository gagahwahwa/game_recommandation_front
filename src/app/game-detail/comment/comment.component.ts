import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommentService } from '../../shared/service/comment.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Output() rateChange = new EventEmitter<number>();
  CommentFormGroup: FormGroup;
  comments$: Observable<any>;
  game_id: number;
  user_id: string;

  basicComment: string[] = [
    '최악이에요!',
    '싫어요!',
    '재미없어요',
    '별로예요.',
    '부족해요.',
    '보통이에요.',
    '볼만해요.',
    '재미있어요.',
    '훌륭해요.',
    '최고예요!'
  ];

  starArray: Array<number>;
  starTypeArray: Array<string>;

  constructor(private commentService: CommentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // 라우터에서 gameID를 받아옴
    // 왜 못받아옴 id -> gameID 바꿔도 안되쟈냐~~~~?
    this.game_id = this.route.snapshot.params.gameId;
    console.log(this.game_id);
    // this.game_id = 13763 ;
    this.user_id = sessionStorage.getItem('id');

    // formGroup 선언
    this.CommentFormGroup = this.fb.group({
      id: [0],
      nickname: [''], // 작성자 닉네임
      regi_date: [''], // 댓글 등록 날짜
      rate: [0], // 평점
      comment: [''] // 댓글 내용
    });
    this.comments$ = this.commentService.getComments(this.game_id);
    }
  newComment(formGroup: FormGroup) {
    // 백엔드로 댓글 전송
    this.commentService.postComment(formGroup.value).subscribe((res: any) => {
      if ( res.result === 'success') { // 성공시
        // 페이지 리로드(?)
        this.comments$ = this.commentService.getComments(this.game_id);
      }
    });
  }
  // 인자 수정 요망
  deleteComment(formGroup: FormGroup) {
    // DB로 삭제할 댓글 전송
  }

  star_rate_bar(rate: number) {
    this.starArray = new Array(5);
    this.starTypeArray = new Array(5).fill('star_border');
    if (rate) {
      const half = rate % 1;
      this.starTypeArray.fill('star', 0, (rate - half));
      if (half === 0.5) {
        this.starTypeArray.fill('star_half', (rate - half), (rate + 1));
      }
    }
    this.rateChange.emit(rate);
  }

}
