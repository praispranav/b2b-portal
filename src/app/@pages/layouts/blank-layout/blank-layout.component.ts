import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankLayoutComponent implements OnInit {
  @ViewChild('root', { static: false }) root;
  constructor() {}

  ngOnInit() {}
}

