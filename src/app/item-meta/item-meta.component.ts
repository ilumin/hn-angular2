import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-meta',
  templateUrl: './item-meta.component.html',
  styleUrls: ['./item-meta.component.scss']
})
export class ItemMetaComponent implements OnInit {
  @Input() item;
  @Input() renderType: string;

  constructor() { }

  ngOnInit() { }

}
