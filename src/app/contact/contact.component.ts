import { DOCUMENT } from '@angular/common';
import { Component, Inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isIEOrEdge: boolean = false;
  constructor( @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);

  }
  
}
