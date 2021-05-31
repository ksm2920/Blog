import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.scss']
})
export class EditInputComponent implements OnInit {
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
