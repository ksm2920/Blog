import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent},
  { path: 'searchblog', component: SearchBlogComponent},
  { path: 'blogs/:id', component: BlogDetailComponent},
  { path: 'posts/:id', component: PostDetailComponent},
  { path: '', redirectTo: '/searchblog', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
