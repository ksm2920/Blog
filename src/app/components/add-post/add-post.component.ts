import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm = this.fb.group({
    id: [''],
    title: [''],
    content: [''],
    blogId: [''],
    comments: this.fb.array([
      this.fb.control('')
    ])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get posts() {
    return this.postForm.get('posts') as FormArray;
  }

  addPost(): void {
    this.posts.push(this.fb.control(''));
  }

}
