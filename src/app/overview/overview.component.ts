import { Component, OnInit } from '@angular/core';
import { HostInfo, VelocityService } from '../shared/velocity.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private vs: VelocityService) {}

  public host_info?: HostInfo

  ngOnInit(): void {
    this.vs.getHostInfo().subscribe(
      res => {
        this.host_info = res
      },
      error => {
        console.log(`error: {error}`)
      }
    )
  }
}
