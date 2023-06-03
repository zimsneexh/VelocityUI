import { Component, OnInit } from '@angular/core';
import { AvailableVM, RunningVM, VelocityService } from '../shared/velocity.service';

@Component({
  selector: 'app-vmlist',
  templateUrl: './vmlist.component.html',
  styleUrls: ['./vmlist.component.scss']
})
export class VMListComponent implements OnInit {


  public available_vms?: AvailableVM[]
  public running_vms?: RunningVM[]

  constructor(private vs: VelocityService) { }

  ngOnInit() {
    this.vs.getAvailableVMs().subscribe(
      result => {
        this.available_vms = result
      },
      error => {
        console.log(error)
      }
    )

    this.vs.getRunningVMs().subscribe(
      result => {
        this.running_vms = result
        console.log(this.running_vms)
      },
      error => {
        console.log(error)
      }
    )
  }

  isVMRunning(name: String): boolean {
    for(let vm of this.running_vms!) {
      if(vm.vm_info.name == name) {
        return true;
      }
    }
    return false;
  }

}
