import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { DealStrategyProvider } from "app/deal.strategyProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(http: Http) {
    http.get('assets/deals.json')
//      .map(res => res.json())
//      .subscribe(deals => this.deals = deals);

      .map(res => res.json())
      .subscribe(deals => {this.deals = this.allDeals = deals['deals']});
  }

  showBroadband:boolean = false;

  
  onToggleBroadband(){
    this.showBroadband = !this.showBroadband;
    this.refreshData();
  }

  private refreshData(){
    var f2 = this.dealFilterProvider.getProvider(
      this.showBroadband
    );
    this.deals = f2.filter(this.allDeals);
    //this.deals = this.allDeals;
  }

  dealFilterProvider = new DealStrategyProvider();

 
  title = "start"
  allDeals =[];
  deals = []

}
