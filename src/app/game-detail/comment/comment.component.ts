import { Component, OnInit } from '@angular/core';
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
  CommentFormGroup: FormGroup;
  comments$: Observable<any>;
  gameID: number;

  constructor(private commentService: CommentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // 라우터에서 gameID를 받아옴
    this.gameID = this.route.snapshot.params.id;
    // formGroup 선언
    this.CommentFormGroup = this.fb.group({
      gameID: [this.gameID],
      cWriter: ['작성자'],
      cDate: [''],
      cRate: [0.0],
      cContent: ['']
    });

    this.comments$ = this.commentService.getComments(this.gameID);

  }
  newComment(formGroup: FormGroup) {
    // 백엔드로 댓글 전송
    this.commentService.postComment(formGroup.value).subscribe((res: any) => {
      if ( res.result === 'success') { // 성공시
        // 페이지 리로드(?)
        this.comments$ = this.commentService.getComments(this.gameID);
      }
    });
  }
  // 인자 수정 요망
  deleteComment(formGroup: FormGroup) {
    // DB로 삭제할 댓글 전송
  }
}
