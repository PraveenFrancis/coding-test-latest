import { Component, OnInit } from '@angular/core';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sample-application';
  constructor(private readonly commonService: CommonService) {}
  ngOnInit() {
    this.commonService.getAllUsers();
  }
}
