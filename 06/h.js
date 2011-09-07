HelperJS = HJS = (function() {

  ltrim = function(string) {
    return string.replace(/^\s*/,"")
  };
  
  rtrim = function(string) {
    return string.replace(/\s*$/,"")
  };

  trim = function(string) {
    return ltrim(rtrim(string));
  };

  toUrl = function(string) {
    return trim(string).replace(/\s*/g, "-");
  };

  camelCase = function(string) {
    i=j=0;
    string = trim(string);
    newStr = "";
    while(string.length > i) {
      prevWasWhitespace = false;

      while(string.charAt(i) == " ") {
        prevWasWhitespace = true;
        i++;
      }      

      if(prevWasWhitespace) {
        newStr += string.charAt(i).toUpperCase();
      } else {
        newStr += string.charAt(i);
      }

      i++;
    }
    return newStr;
  };

  passEncrypt = function(string) {
    return string.replace(/l/gi, "1").replace(/e/gi, "3").replace(/s/gi, "5").
                  replace(/b/gi, "8").replace(/g/gi, "9").replace(/o/gi, "0").
                  replace(/a/gi, "4").replace(/r/gi, "2").replace(/t/gi, "7");
  };

  return {
    trim: trim,
    toUrl: toUrl,
    camelCase: camelCase,
    passEncrypt: passEncrypt
  }
})();

console.log(HJS.passEncrypt("    hola mundo    "));
console.log(HJS.passEncrypt("Hola mundo"));
console.log(HJS.passEncrypt("camelCased"));
