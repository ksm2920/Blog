import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() post?: Post;
  comment: Comment;

  commentForm = this.fb.group({
    id: [''],
    content: ['', Validators.required],
    postId: ['']
  })
  constructor(
    private service: BlogService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.service.selectedComment$
    .subscribe(comment => {
      this.comment = comment;
    })
  }

  get content() {
    return this.commentForm.get('content');
  }

  async addComment(comment:Comment) {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    comment = new Comment(0, comment.content, postId);
    if(!comment) {
      return;
    }
    let fetchedComment = await this.service.addComment(comment);
    this.post.comments.push(fetchedComment);
    this.ref.detectChanges();
    this.commentForm.get('content').setValue('');
  }

  update(comment: Comment): void {
    this.service.updateComment(comment);
  }

  deleteComment(comment: Comment): void {
    this.post.comments = this.post.comments.filter(c => c !== comment);
    this.service.deleteComment(comment.id);
  }

  editComment(comment, value): void {
    comment.content = value;
  }
}
