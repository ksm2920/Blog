import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  blogs: Blog[] = [];
  blogForm = this.fb.group({
    id: [''],
    title: [''],
    userId: [''],
    posts: this.fb.array([
      this.fb.control('')
    ])
  })
  constructor(
    private service: BlogService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  add(blog: Blog): void {
    blog = new Blog( 0, blog.title, blog.userId, []) ;
    if(!blog) {
      return;
    }
    this.service.addBlog(blog)
    .subscribe(blog => {
      this.blogs.push(blog);
    })
  }
  onSubmit(): void {
    console.log(this.blogForm.value)
  }
}
