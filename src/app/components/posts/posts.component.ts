import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() blog?: Blog;
  // posts: Post[] = [];
  
  postForm = this.fb.group({
    id: [''],
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(3)]],
    blogId: [''],
    comments: this.fb.array([
      this.fb.control('')
    ])
  })
  
  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void { }

  get title() {
    return this.postForm.get('title');
  }

  get content() {
    return this.postForm.get('content');
  }
  
  addPost(post: Post): void { 
    const blogId = Number(this.route.snapshot.paramMap.get('id'));

    post = new Post( 0, post.title, post.content, blogId, []);
    if(!post) {
      return;
    }
    this.service.addPost(post)
    .subscribe(post => {
      this.blog.posts.push(post);
      this.ref.detectChanges();
      this.postForm.reset();
    })
  }

  deletePost(post: Post): void {
    this.blog.posts = this.blog.posts.filter(p => p !== post);
    this.service.deletePost(post.id).subscribe();
  }

}
