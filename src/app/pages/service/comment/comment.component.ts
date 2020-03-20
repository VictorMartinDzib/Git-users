import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})


export class CommentComponent implements OnInit {

  @Input() repository; //Recibiendo variable del padre
  @Output() clickRepo = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickRepo.emit(this.repository.name);
  }

  

}
