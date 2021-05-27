import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentForm = this.fb.group({
    comments: this.fb.array([
      this.fb.control('')
    ])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get commens() {
    return this.commentForm.get('comments') as FormArray
  }

  addComment(): void {
    this.commens.push(this.fb.control(''));
  }

  onSubmit(): void {
    console.log(this.commentForm.value);
  }
}
