		(function () {
			var whatname = [ "John", "Jim", "Jen","Yaakov", "Jason", "Frank", "Larry", "Paula", "Paul", "Laura"];
			for(var i = 0; i < whatname.length; i++) {
				var oneworld = whatname[i].charAt(0).toLowerCase();
				var coutworld = "Hello";
				function Vivod(Jwithname) {
					console.log(coutworld + " " + Jwithname);
				}
				if (oneworld === 'j') {
					coutworld = "Good Bye";
				}
				Vivod(whatname[i]);
			}
		})();