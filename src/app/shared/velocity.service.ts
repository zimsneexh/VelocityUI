import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const VELOCITY_HTTP_URL = "http://10.211.55.1:8080/"

@Injectable({
  providedIn: 'root'
})
export class VelocityService {

  constructor(private httpClient: HttpClient) { }

  getHostInfo(): Observable<HostInfo> {
    return this.httpClient.get<HostInfo>(VELOCITY_HTTP_URL + "hostInfo")
  }

  getVelocityURL() {
    return VELOCITY_HTTP_URL
  }

  getAvailableVMs(): Observable<AvailableVM[]> {
    return this.httpClient.get<AvailableVM[]>(VELOCITY_HTTP_URL + "listAvailableVMs")
  }

  getRunningVMs(): Observable<RunningVM[]> {
    return this.httpClient.get<RunningVM[]>(VELOCITY_HTTP_URL + "listRunningVMs")
  }

  getAvailableVM(name: String): Observable<AvailableVM> {
    return this.httpClient.get<AvailableVM>(VELOCITY_HTTP_URL + "getVM?name=" + name)
  }

  startVM(name: String) {
    return this.httpClient.get<VelocityMessage>(VELOCITY_HTTP_URL + "startVM?name=" + name)
  }

  stopVM(name: String) {
    return this.httpClient.get<VelocityMessage>(VELOCITY_HTTP_URL + "stopVM?name=" + name)
  }
}

export class HostInfo {
  constructor(public uptime: String, public cpu_name: String, public disk_info: String, public model_name: String) {}
}

export class AvailableVM {
  constructor(public name: String, public rosetta: boolean, public iso_image_path: String, public memory_size: number, public screen_size: number[], public machine_type: String, public disks: Disk[], public cpu_count: number) { }
}

export class RunningVM {
  constructor(public vm_info: AvailableVM, public vm_state: String) { }
}

export class Disk {
  constructor(public name: String, public size_mb: number) { }
}

export class VelocityMessage {
  constructor(public message: String) { }
}