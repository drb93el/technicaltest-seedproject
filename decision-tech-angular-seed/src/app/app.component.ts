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

      .subscribe(deals => this.deals = this.filter.filter(deals.json()['deals']));

  }

  showBroadband:boolean = false;

  
  onToggleBroadband(){
    this.showBroadband = !this.showBroadband;
  }

  dealFilterProvider = new DealStrategyProvider();
  filter = this.dealFilterProvider.getProvider(
    this.showBroadband
  );
 
  title = "start"
  deals = []

}
