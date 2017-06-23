interface IDealFilter{
    filter([]);
}

class ShowAllDealFilter implements IDealFilter{
    filter(deals = []){
        return deals;
    } 
}

class BroadbandDealFilter implements IDealFilter{
    filter(deals = []){
        var d = [];
        d.push(deals[0]);
        return d;

    }
}

export class DealStrategyProvider{
    getProvider(showBroadband:boolean){
        if (showBroadband)
            return new BroadbandDealFilter();
        return new ShowAllDealFilter();
    }
};