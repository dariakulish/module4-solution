(function (window){
    var GBye={};
    var sadw = "Good Bye";
    GBye.speak=function (givenname){
      console.log(sadw + " " + givenname);
    }
     window.GBye = GBye;
})(window);