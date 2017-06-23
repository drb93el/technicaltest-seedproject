interface IDealFilter{
    filter([]);
}

class ShowAllDealFilter implements IDealFilter{
    filter(deals = []){
        return deals;
    } 
}


export class BroadbandDealFilter implements IDealFilter{
    filter(deals = []){
        var d = [];
        
        deals.forEach((deal)=>{
            var types = deal.productTypes as string[];
            if (types.indexOf("Broadband") != -1)
                d.push(deal);
        });

        return d;
    }
}

export class BroadbandAndTVDealFilter implements IDealFilter{
    filter(deals = []){
        var d = [];
        
        deals.forEach((deal)=>{
            // should refactor out the checking array contains to base class
            var types = deal.productTypes as string[];
            if (types.indexOf("Broadband") != -1 &&
                types.indexOf("TV") != -1)
                d.push(deal);
        });
        
        return d;
    }
}

export class DealStrategyProvider{
    getProvider(showBroadband:boolean, showTV:boolean){
        if (showBroadband){
            if (showTV)
                return new BroadbandAndTVDealFilter();
            else
                return new BroadbandDealFilter();
        }

        return new ShowAllDealFilter();
    }
};