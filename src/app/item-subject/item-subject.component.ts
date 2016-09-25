import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-subject',
  templateUrl: './item-subject.component.html',
  styleUrls: ['./item-subject.component.scss']
})
export class ItemSubjectComponent implements OnInit {
  @Input() item;
  renderType: string;

  constructor() { 
    this.renderType = this.renderType ? this.renderType : 'laptop';
  }

  ngOnInit() {
  }

}
