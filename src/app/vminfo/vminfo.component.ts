import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvailableVM, VelocityService } from '../shared/velocity.service';

@Component({
  selector: 'app-vminfo',
  templateUrl: './vminfo.component.html',
  styleUrls: ['./vminfo.component.scss']
})
export class VMInfoComponent implements OnInit {

  public VM?: AvailableVM
  public snapshotURL?: String

  constructor(private ar: ActivatedRoute, private vs: VelocityService) {
    
  }

  ngOnInit(): void {
    this.ar.params.subscribe(result => {
      this.vs.getAvailableVM(result["name"]).subscribe(
        result => {
          this.VM = result
          this.snapshotURL = this.vs.getVelocityURL() + "snapshot?name=" + this.VM.name + "&x=" + (new Date()).getTime();
        }, error => {
          console.log(error)
        }
      )
    }, error => {
      console.log(error)
    })
  }

  startVM() {
    this.vs.startVM(this.VM?.name!).subscribe(res => {
      console.log("res: " + res.message)
    }, error => {
      console.log(error)
    })
  }

  stopVM() {
    this.vs.stopVM(this.VM?.name!).subscribe(res => {
      console.log("res: " + res.message)
    }, error => {
      console.log(error)
    })
  }
}
