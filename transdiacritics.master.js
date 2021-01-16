/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(function()
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;

  const /** !Object */ g =
  { "toascii": translate,
  };

  if (!O.assign)
    O.defineProperty(O, "assign",
    { "value": function(d, s, i)
      { if (s) for (i in s) d[i] = s[i]; return d;
      }
    });

  const /** Object */ diacr = {}; // Full list of diacritic aliases
  const /** !RegExp */ nonasciirx = /[^\0-~]/g;

  function /** string */ translate(/** string */ s)
  { return s.replace(nonasciirx, function(a) { return diacr[a] || a; });
  }

  (function(fm)
  { var i, j, p;
    for (i in fm)
      for (p = 0; j = fm[i].pop(); diacr[String.fromCharCode(p = p + j)] = i)
        if (j < 0)
        { while (j++ < 0)
            fm[i].push(2);
          j++;
        }
  })({ "a":[53980,1941,1561,-10,7,153,7089,41,36,2,6,26,2,17,
        201,-1,28,2,1,1,1,127,97],"aa":[42803],"ae":[26,253,2,228],"ao":[42805],
        "au":[42807],"av":[2,42809],"ay":[42813],"b":[55921,1738,-1,7088,208,3,
        286,98],"c":[22532,33389,846,891,7117,180,123,-2,32,132,99],"d":[22474,
        33447,1728,-3,7092,1,202,123,2,171,100],"dz":[45,454],"e":[55921,1549,
        -6,156,-3,7098,20,30,34,2,40,194,-3,40,1,1,1,131,101],"f":[22474,33447,
        1718,7309,300,102],"g":[22438,34,33449,1717,168,6937,107,14,2,194,-2,
        182,103],"h":[53970,14,1937,1601,107,-3,7102,70,248,2,189,104],
        "hv":[405],"i":[55921,1549,2,154,2,7109,93,2,57,159,-3,58,1,1,1,131,
        105],"j":[55921,8848,89,187,203,106],"k":[22440,94,-1,31447,1936,1701,
        -1,7240,80,98,204,107],"l":[22475,56,2,31462,1926,1694,-2,7116,209,27,
        61,-3,206,108],"lj":[457],"m":[55921,1689,-1,7118,2,514,109],"n":[22441,
        20,33460,1682,-2,7123,121,91,85,1,-1,83,131,110],"nj":[460],"o":[22530,
        2,33389,1531,-10,122,-2,7128,33,35,-2,28,2,14,18,2,25,49,80,-1,85,3,1,
        1,1,131,111],"oe":[93,246],"oi":[419],"oo":[42831],"ou":[547],
        "p":[22523,-1,33394,1672,2,216,7128,309,112],"q":[22520,2,33399,8853,
        474,113],"r":[22443,36,40,33402,1666,-2,7132,48,58,2,184,-1,227,114],
        "s":[22442,36,33443,1607,50,-3,7202,38,184,-2,232,115],"ss":[223],
        "t":[22477,31521,1923,1612,38,-2,7139,109,110,70,-1,239,116],
        "tz":[42793],"u":[55921,1523,-5,106,-3,7146,114,2,57,-3,36,61,-4,110,1,
        1,132,117],"ue":[252],"v":[22519,33402,1638,2,7153,1,533,118],
        "vy":[42849],"w":[53988,1933,1614,15,-3,7436,254,119],"x":[55921,1626,
        2,7699,120],"y":[55921,1513,6,-2,90,10,7232,28,127,61,120,2,132,121],
        "z":[22519,31479,1923,1620,-1,7249,27,111,56,-1,256,122] });

  if (typeof define == "function" && define["amd"])
    define("transdiacritics", [], g);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports), g);
  else
    window["Transdiacritics"] = g;

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
