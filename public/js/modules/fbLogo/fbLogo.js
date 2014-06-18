var fbLogo = angular.module('fbLogo', []);

fbLogo.directive("fbLogo", function(){
  var template ='<div class="row" >'+
                  '<div class="col-xs-4 text-center">'+
                    '<div class="logoBg">'+
                      '<img class="logo" src="/assets/foodbot.png"/>'+
                    '</div>'+
                  '</div>'+
                '</div>';
  return {
    restrict: 'E',
    template: template, 
  };
});


