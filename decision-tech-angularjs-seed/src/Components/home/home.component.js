import angular from 'angular';


angular.module('app').service('home.service', homeService)
function  homeService($http){
	return {
		getDeals: ()=>
		{
			return $http.get('/assets/deals.json').then(result=>result.data.deals)
		}
		
	}
}
homeService.$inject = ['$http']


angular.module('app').component('home', {
	template: `
	<div><a href="/"  id="logo"></a> 
<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>

{{$ctrl.deals}}
</div>
	
	`,
	controller: homeComponentController
})

function homeComponentController(homeService){
	this.deals = [];
	homeService.getDeals().then(deals=>this.deals=deals)
}
homeComponentController.$inject = ['home.service']