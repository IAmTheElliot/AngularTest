(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
      this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'test description goes here',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: "second test description",
      canPurchase: false,
      soldOut: false,
    }
  ];

})();
