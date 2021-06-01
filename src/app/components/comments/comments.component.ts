import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
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

  commentForm = this.fb.group({
    id: [''],
    content: [''],
    postId: ['']
  })
  constructor(
    private service: BlogService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
  }

  get commens() {
    return this.commentForm.get('comments') as FormArray
  }

  addComment(comment:Comment): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    comment = new Comment(0, comment.content, postId);
    if(!comment) {
      return;
    }
    this.service.addComment(comment)
    .subscribe(comment => {
      this.post.comments.push(comment);
      this.ref.detectChanges();
    })
  }

  update(comment: Comment): void {
    this.service.updateComment(comment)
    .subscribe();
    console.log(comment);
  }

  deleteComment(comment: Comment): void {
    this.post.comments = this.post.comments.filter(c => c !== comment);
    this.service.deleteComment(comment.id).subscribe();
  }

  onSubmit(): void {
    console.log(this.commentForm.value);
  }

  editComment(comment, value): void {
    console.log(value);
    comment.content = value;
  }
}
