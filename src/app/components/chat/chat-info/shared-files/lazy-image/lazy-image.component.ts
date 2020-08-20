import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent implements OnInit {

  @Input() src: string;
  @Input() height: string;
  @Input() width: string;
  @Input() margin: string;
  @Input() borderRadius: string;
  @Input() clipPath: string;
  @Input() filter: number;

  loaded = false;
  image = new Image();

  constructor() { }

  ngOnInit() {
    this.image.onload = () => { this.loaded = true; };
    this.image.src = this.src;
    this.loaded = false;
  }

}
