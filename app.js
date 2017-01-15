(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Implementação do controller 1
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var tb = this;

  tb.markBought = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  tb.buyList = ShoppingListCheckOffService.getToBuyList();
}

// Implementação do controller 2
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var ab = this;

  ab.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();

}

function ShoppingListCheckOffService (){
  var service = this;

  service.item1 = {name: "cookie", quantity: 5};
  service.item2 = {name: "apple", quantity: 8};
  service.item3 = {name: "candy", quantity: 10};
  service.item4 = {name: "fried chicken", quantity: 3};
  service.item5 = {name: "something", quantity: 99};
  service.toBuy  = [service.item1, service.item2, service.item3, service.item4, service.item5];

  service.bought = [];

  service.buyItem = function (itemIndex)  {
    service.bought.push(service.toBuy[itemIndex]);
    service.toBuy.splice(itemIndex,1);
    // console.log(service.toBuy.length);
  }

  service.getToBuyList = function () {
    return service.toBuy;
  }

  service.getAlreadyBoughtList = function () {
    return service.bought;
  }

}

}());
