(function () {
  var HUNDREDS = [
      ""
    , " seratus "
    , " dua ratus "
    , " tiga ratus "
    , " empat ratus "
    , " lima ratus "
    , " enam ratus "
    , " tujuh ratus "
    , " delapan ratus "
    , " sembilan ratus "
  ];

  var TENS = [
      ""
    , " sepuluh "
    , " dua puluh "
    , " tiga puluh "
    , " empat puluh "
    , " lima puluh "
    , " enam puluh "
    , " tujuh puluh "
    , " delapan puluh "
    , " sembilan puluh "
  ];
  var TEENS = [
      ""
    , " sebelas "
    , " dua belas "
    , " tiga belas "
    , " empat belas "
    , " lima belas "
    , " enam belas "
    , " tujuh belas "
    , " delapan belas "
    , " sembilan belas "
  ];
  var UNITIES = [
      ""
    , " satu "
    , " dua "
    , " tiga "
    , " empat "
    , " lima "
    , " enam "
    , " tujuh "
    , " delapan "
    , " sembilan "
  ];
  var ZERO = "nol";
  var MINUS = " minus ";
  var THOUSANDS = {
        one: " ribu "
      , few: " ribu "
      , many: " ribu "
    };

  var MILIONS = {
      one: " juta "
    , few: " juta "
    , many: " juta "
  };
  var POSITIVE_OVERFLOW = "terlalu besar / not implemented yet";
  var NEGATIVE_OVERFLOW = "terlalu kecil / not implemented yet";

  function process0999(digits) {
    var result = "";

    result += HUNDREDS[digits[0]];

    if (digits[1] === 1 && digits[2] !== 0) {
      result += TEENS[digits[2]];
    } else {
      result += TENS[digits[1]];
      result += UNITIES[digits[2]];
    }

    return result;
  };

  function classify(digits) {
    if (digits.join("") === "001") {
      return "one";
    } else if (digits[1] !== 1 && (digits[2] === 2 || digits[2] === 3 || digits[2] === 4)) {
      return "few";
    } else {
      return "many";
    }
  };

  function bahasaToWords(number) {
    var digits;
    var result = "";

    number = parseInt(number, 10);
    digits = String(Math.floor(Math.abs(number))).split("");

    for (var i = 0; i < digits.length; i++) {
      digits[i] = parseInt(digits[i], 10);
    }

    if (digits.length > 9) {
      return number > 0 ? POSITIVE_OVERFLOW : NEGATIVE_OVERFLOW;
    }

    if (parseInt(number, 10) < 0) {
      result += MINUS;
    }

    while (digits.length < 9) {
      digits.unshift(0);
    }

    if (parseInt(number, 10) === 0) {
      result += ZERO;
    } else {
      result += process0999(digits.slice(0, 3));

      if (digits.slice(0, 3).join("") !== "000") {
          result += MILIONS[classify(digits.slice(0, 3))];
      }

      result += process0999(digits.slice(3, 6));

      if (digits.slice(3, 6).join("") !== "000") {
          result += THOUSANDS[classify(digits.slice(3, 6))];
      }

      result += process0999(digits.slice(6, 9));
    }

    return result.replace(/ +/g, " ").replace(/^ +| +$/g, "");
  }

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = bahasaToWords;
    }
    exports.bahasaToWords = bahasaToWords;
  } else {
    this.bahasaToWords = bahasaToWords;
  }
}).call(this);
