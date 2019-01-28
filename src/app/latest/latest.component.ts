import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  @Input() messages: any[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

}
