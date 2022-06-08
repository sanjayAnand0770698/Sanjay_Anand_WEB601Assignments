import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() contentItem?: Content;
  @Input() isLastItem: boolean = false;

  defaultImagePath = "assets/default-image.png";
  titleColour = "#00FF00";
  tagColour = "#1e88e5";
  constructor() { }

  ngOnInit(): void {
  }


  displayId(): void {
    console.log('Current id is: ', this.contentItem?.id, this.contentItem?.title);
  }
}
