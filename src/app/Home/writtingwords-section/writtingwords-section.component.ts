import { Component, OnInit, Input} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-writtingwords-section',
  templateUrl: './writtingwords-section.component.html',
  styleUrls: ['./writtingwords-section.component.scss']
})
export class WrittingwordsSectionComponent implements OnInit {

  @Input() title!: string;

  @Input() valus!: string;

  constructor() {
  }

  ngOnInit(): void
  {
    var typed =  new Typed('.text-slider', {
      strings: this.valus.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
      showCursor: false,
    });

  }

}
