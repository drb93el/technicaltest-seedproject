import { 
    DealStrategyProvider,
    BroadbandDealFilter,
    BroadbandAndTVDealFilter
 } from "app/deal.strategyProvider";
import { async } from "@angular/core/testing";

describe('Test DealStrategyProvider', () => {
    it('No filter set, return ShowAllDealFilter',async(()=>{
        var strategy = new DealStrategyProvider();
        var provider = strategy.getProvider(false,false) 

        expect(provider).not.toBeNull();
        expect(provider.constructor.name).toBe("ShowAllDealFilter");
    }));

    it('Broadband only, return BroadbandDealFilter',async(()=>{
        var strategy = new DealStrategyProvider();
        var provider = strategy.getProvider(true,false) 

        expect(provider).not.toBeNull();
        expect(provider.constructor.name).toBe("BroadbandDealFilter");
    }));

    it('Broadband and TV, return BroadbandAndTVDealFilter',async(()=>{
        var strategy = new DealStrategyProvider();
        var provider = strategy.getProvider(true,true) 

        expect(provider).not.toBeNull();
        expect(provider.constructor.name).toBe("BroadbandAndTVDealFilter");
    }));

    var mockDeals =[{
         "title":"Deal A",
         "productTypes":[
            "Broadband",
            "Phone"
         ],
        },
        {
         "title":"Deal B",
         "productTypes":[
            "Phone"
         ]},
        {
         "title":"Deal C",
         "productTypes":[
            "TV",
            "Broadband"
         ]}
    ] ;


    it('Filter broadband only deals, return 2 deals', async(()=>{
        var provider = new BroadbandDealFilter();
        
        var deals = provider.filter(mockDeals);

        expect(deals).not.toBeNull(); 
        expect(deals.length).toBe(2);    
        expect(deals[0].title).toBe("Deal A");
    }));

    it('Filter broadband and TV deals, return 1 deal', async(()=>{
        var provider = new BroadbandAndTVDealFilter();

        var deals = provider.filter(mockDeals);

        expect(deals).not.toBeNull(); 
        expect(deals.length).toBe(1);    
        expect(deals[0].title).toBe("Deal C");
    }));

});