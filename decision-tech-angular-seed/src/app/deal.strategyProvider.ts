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
        
        deals.forEach((deal)=>{
            if (deal.productTypes.indexOf("Broadband")==0)
                d.push(deal);
        });
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