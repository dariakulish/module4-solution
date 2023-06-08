(function(){
    var givenname = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var i=0 ; i<givenname.length ; i++){
       var words = givenname[i].charAt(0).toLowerCase();
        if(words == 'j'){
           GBye.speak(givenname[i]);
        }
        else
        {
          Bonj.speak(givenname[i]);
        }
      }
    })();