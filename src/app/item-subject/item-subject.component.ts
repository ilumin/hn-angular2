import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-subject',
  templateUrl: './item-subject.component.html',
  styleUrls: ['./item-subject.component.scss']
})
export class ItemSubjectComponent implements OnInit {
  @Input() item;
  @Input() renderType: string;

  constructor() { }

  ngOnInit() { }

}
