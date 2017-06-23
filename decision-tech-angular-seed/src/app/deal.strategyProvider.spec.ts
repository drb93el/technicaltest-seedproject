import { DealStrategyProvider } from "app/deal.strategyProvider";
import { async } from "@angular/core/testing";

describe('Test DealStrategyProvider', () => {
    it('No filter set, return ShowAllDealFilter',async(()=>{
        var strategy = new DealStrategyProvider();
        var provider = strategy.getProvider(false) 

        expect(provider).not.toBeNull();
        expect(provider.constructor.name).toBe("ShowAllDealFilter");
    }));

    it('Broadband only, return BroadbandDealFilter',async(()=>{
        var strategy = new DealStrategyProvider();
        var provider = strategy.getProvider(true) 

        expect(provider).not.toBeNull();
        expect(provider.constructor.name).toBe("BroadbandDealFilter");
    }));

    var mockDeals =[{
         "title":"Deal A",
         "productTypes":[
            "Broadband",
            "Phone"
         ],
        },
        {
         "title":"Deal A",
         "productTypes":[
            "Phone"
         ]}
    ] ;


    it('Filter broadband only deals', async(()=>{
        var strategy = new DealStrategyProvider();
        var provider = strategy.getProvider(true) 

        var deals = provider.filter(mockDeals);

        expect(deals).not.toBeNull(); 
        expect(deals.length).toBe(1);    
    }));

});