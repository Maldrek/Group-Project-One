! function (n, e, o) {
    function s(n) {
        var e = r.className,
            o = Modernizr._config.classPrefix || "";
        if (c && (e = e.baseVal), Modernizr._config.enableJSClass) {
            var s = new RegExp("(^|\\s)" + o + "no-js(\\s|$)");
            e = e.replace(s, "$1" + o + "js$2")
        }
        Modernizr._config.enableClasses && (e += " " + o + n.join(" " + o), c ? r.className.baseVal = e : r.className = e)
    }
    function a(n, e) {
        return typeof n === e
    }
    function i() {
        var n, e, o, s, i, f, r;
        for (var c in l)
            if (l.hasOwnProperty(c)) {
                if (n = [], e = l[c], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (o = 0; o < e.options.aliases.length; o++) n.push(e.options.aliases[o].toLowerCase());
                for (s = a(e.fn, "function") ? e.fn() : e.fn, i = 0; i < n.length; i++) f = n[i], r = f.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), t.push((s ? "" : "no-") + r.join("-"))
            }
    }
    var t = [],
        l = [],
        f = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (n, e) {
                var o = this;
                setTimeout(function () {
                    e(o[n])
                }, 0)
            },
            addTest: function (n, e, o) {
                l.push({
                    name: n,
                    fn: e,
                    options: o
                })
            },
            addAsyncTest: function (n) {
                l.push({
                    name: null,
                    fn: n
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = f, Modernizr = new Modernizr, Modernizr.addTest("geolocation", "geolocation" in navigator);
    var r = e.documentElement,
        c = "svg" === r.nodeName.toLowerCase();
    i(), s(t), delete f.addTest, delete f.addAsyncTest;
    for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]();
    n.Modernizr = Modernizr
}(window, document);
//----------------------------------------------------------------------------------------------//

//  var ingredients = [];
//         var apiKey = "19c8ef98b95c43ccbc622424c606372b";
//         //On click event to capture user input and pass to ingredients array, then makes AJAX call for API
//         $("#submit").on("click", function (event) {
//             // event.preventDefault() prevents the form from trying to submit itself.
//             // We're using a form so that the user can hit enter instead of clicking the button if they want
//             event.preventDefault();
//             // This line will grab the text from the input box
//             var ingredient = $("#add-ingredient").val().trim();
//             // The ingredient from the textbox is then added to our array
//             ingredients.push(ingredient);
//             var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=d0f24b12&app_key=" + apiKey + "&from=0&to=5";
//             $.ajax({
//                 url: queryURL,
//                 method: 'GET'
//             }).then(function (response) {
//                 var results = response.hits;
//                     for (var i = results.length - 1; i >= 0; i--) {
//                         results[i]
//                     }
//                 console.log(response);
//                 $(".food").text(response.hits);
//             }); 
//             return false;        
//         });
//         $("#submit").on("submit", function (event) {
//             event.preventDefault();
//         });