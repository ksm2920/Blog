import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-edit-textarea',
  templateUrl: './edit-textarea.component.html',
  styleUrls: ['./edit-textarea.component.scss']
})
export class EditTextareaComponent implements OnInit {
  @Input() data: Blog;
  @Output() focusOut: EventEmitter<Blog> = new EventEmitter<Blog>();
  editMode = false;
  constructor() { }

  ngOnInit(): void {
  }
 
  onFocusOut() {
    this.focusOut.emit(this.data);
  }
}
