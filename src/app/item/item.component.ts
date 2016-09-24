import { Component, Input, OnInit } from '@angular/core';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;

  constructor(private _service: HackernewsApiService) { }

  ngOnInit() {
    this._service.fetchItem(this.itemID)
      .subscribe(
        data => this.item = data,
        error => console.error('Could not load item' + this.itemID)
      );
  }

}
