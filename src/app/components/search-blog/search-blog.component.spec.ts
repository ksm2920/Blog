import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BlogService } from 'src/app/services/blog.service';
import { MockBlogService } from 'src/app/services/MockBlogService';

import { SearchBlogComponent } from './search-blog.component';

describe('SearchBlogComponent', () => {
  let component: SearchBlogComponent;
  let fixture: ComponentFixture<SearchBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBlogComponent],
      imports: [HttpClientModule],
      providers: [{ provide: BlogService, useClass: MockBlogService }, FormBuilder],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click search button', waitForAsync(() => {
    const input = fixture.debugElement.query(By.css('input'));
    const button = fixture.debugElement.query(By.css('button'));
    input.nativeElement.value = "1";
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.blogs.length).toBe(5);
    expect(component.blogs[0].title).toBe('Blog1');
  }));
});
