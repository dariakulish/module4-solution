(function (window){
    var Bonj={};
    var goodw="Hello";
    Bonj.speak=function(givenname){
      console.log(goodw + " " + givenname);
    }
   window.Bonj=Bonj;
})(window);