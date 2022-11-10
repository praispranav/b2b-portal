import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-faq-add',
  templateUrl: './page-faq-add.component.html',
  styleUrls: ['./page-faq-add.component.scss']
})
export class PageFaqAddComponent implements OnInit {
  options = [
    { value: 'jack', label: 'Jacks' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];

  csoptions = [
    { value: 'Web-safe', label: 'Web-safe' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'SegeoUI', label: 'SegeoUI' }
  ];

  tags = ['Smith', 'Jane'];
  selectedOption;
  selectedOptionCS;
  constructor() { }

  ngOnInit() {
  }

}
