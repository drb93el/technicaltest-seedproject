import { DealStrategyProvider } from "app/deal.strategyProvider";
import { async } from "@angular/core/testing";

describe('Test DealStrategyProvider', () => {
    it('No filter set, return ShowAllDealFilter',async(()=>{
        var strategy = new DealStrategyProvider();
        var provider = strategy.getProvider(false) 
        

        expect(provider).not.toBeNull();
        expect(provider.constructor.name).toBe("ShowAllDealFilter");
    }));
});