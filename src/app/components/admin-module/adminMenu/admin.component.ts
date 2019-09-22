import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './admin.component.html'
})
export class AdminMenuComponent implements AfterViewInit {

  view;

  @ViewChild('data', {read: ElementRef}) data: ElementRef;
  @ViewChild('presence', {read: ElementRef}) presence: ElementRef;
  @ViewChild('documents', {read: ElementRef}) documents: ElementRef;
  @ViewChild('archives', {read: ElementRef}) archives: ElementRef;
  @ViewChild('edit', {read: ElementRef}) edit: ElementRef;
  @ViewChild('access', {read: ElementRef}) acces: ElementRef;
  @ViewChild('members', {read: ElementRef}) members: ElementRef;

  constructor(private route: ActivatedRoute) {
    this.view = this.route.snapshot.routeConfig.path;
  }

  ngAfterViewInit(): void {
    switch (this.view) {
      case '' :
      this.data.nativeElement.classList.add('active2');
      break;
      case 'obecnosc' :
      this.presence.nativeElement.classList.add('active2');
      break;
      case 'ustawienia' :
      this.edit.nativeElement.classList.add('active2');
      break;
      case 'platnosci' :
      this.documents.nativeElement.classList.add('active2');
      break;
      case 'archiwum' :
      this.archives.nativeElement.classList.add('active2');
      break;
      case 'dostep' :
      this.acces.nativeElement.classList.add('active2');
      break;
      case 'grupy' :
      this.members.nativeElement.classList.add('active2');
      break;
    }
}
}
