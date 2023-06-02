import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const VELOCITY_HTTP_URL = "http://192.168.1.111:8080/"

@Injectable({
  providedIn: 'root'
})
export class VelocityService {

  constructor(private httpClient: HttpClient) { }

  getHostInfo(): Observable<HostInfo> {
    return this.httpClient.get<HostInfo>(VELOCITY_HTTP_URL + "hostInfo")
  }
}

export class HostInfo {
  constructor(public uptime: String, public cpu_name: String, public disk_info: String, public model_name: String) {}
}