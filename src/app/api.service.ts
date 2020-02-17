import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { GraphPage } from './graph/graph.page';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url='https://qapps.gainwellindia.com/gcpl/cars/api/';
  url='https://qapps.gainwellindia.com/gcpl/cars/api/';
  constructor(private httpClient: HttpClient,private http: HttpClient) { }

  register(data) {
  

    return this.http.post(this.url+'login',data)

  }
  aproveview(data) {
  

    return this.http.post(this.url+'capex-request-itadmin-list',data)

  }
  aprovesuper(data) {
  

    return this.http.post(this.url+'capex-request-supervisor-list',data)

  }
  approvebudgetowner(data) {
  

    return this.http.post(this.url+'capex-request-budget-owner-list',data)

  }
  approvecfo(data) {
  

    return this.http.post(this.url+'capex-request-cfo-list',data)

  }
  approvecmd(data) {
  

    return this.http.post(this.url+'capex-request-cmd-list',data)

  }
  approvefinance(data) {
  

    return this.http.post(this.url+'capex-request-finance-list',data)

  }
  aproveviewdetails(data) {
  

    return this.http.post(this.url+'capex-details',data)

  }
  superaprove(data) {
  

    return this.http.post(this.url+'capex-request-supervisor-edit-save',data)

  }
  cfoapprove(data) {
  

    return this.http.post(this.url+'capex-request-cfo-edit-save',data)

  }
  budgetownerapprove(data) {
  

    return this.http.post(this.url+'capex-request-budget-owner-edit-save',data)

  }
  cmdapprove(data) {
  

    return this.http.post(this.url+'capex-request-cmd-edit-save',data)

  }
  dashboard(data){
    return this.http.post(this.url+'dashboard-tiles',data)
  }
  ytdlist(data){
    return this.http.post(this.url+'list-ytd',data)
  }
  yoylist(data){
    return this.http.post(this.url+'list-yoy',data)
  }
  assetlist(data){
    return this.http.post(this.url+'list-asset-wise',data)
  }
 

  ytdGraph(data){
    return this.http.post(this.url+'graph-ytd',data)
  }
  yoyGraph(data){
    return this.http.post(this.url+'graph-yoy',data)
  }
  asset(data){
    return this.http.post(this.url+'graph-assetwise',data)
  }
  Top5(data){
    return this.http.post(this.url+'budget-utilization-high-low',data)
  }
  notice(data){
    return this.http.post(this.url+'notification',data)
  }
  password(data){
    return this.http.post(this.url+'settings-save',data)
  }
  reports(data){
    return this.http.post(this.url+'budget-vs-actual-report',data)
  }
  reset(data){
    return this.http.post(this.url+'send-reset-password',data)
  }
  change(data){
    return this.http.post(this.url+'change-password',data)
  }
  year(data){
    return this.http.post(this.url+'year',data)
  }
  

 
 
  

  
}
