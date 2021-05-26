import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  posts: Post[] = [];
  postForm = this.fb.group({
    id: [''],
    title: [''],
    content: [''],
    blogId: [''],
    comments: this.fb.array([
      this.fb.control('')
    ])
  })
  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  addPost(post: Post): void { 
    const blogId = Number(this.route.snapshot.paramMap.get('id'));

    post = new Post( 0, post.title, post.content, blogId, []);
    if(!post) {
      return;
    }
    this.service.addPost(post)
    .subscribe(post => {
      this.posts.push(post);
    })
  }
}
