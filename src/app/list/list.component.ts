import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../to-do';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
