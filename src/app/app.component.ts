import { Component, OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {

  title: Observable<string>;

  constructor(private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.title = this.eventBusService.observe('appTitleChange');
  }

}
