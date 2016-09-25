import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-link',
  templateUrl: './comment-link.component.html',
  styleUrls: ['./comment-link.component.scss']
})
export class CommentLinkComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
