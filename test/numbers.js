$(document).ready(function () {

    test("zero", function () {
        equal(bahasaToWords(0), "nol");
    });

    test("minux", function () {
        equal(bahasaToWords(-1), "minus satu");
        equal(bahasaToWords(-1000000), "minus satu juta");
    });

    test("unities", function () {
        equal(bahasaToWords(1), "satu");
        equal(bahasaToWords(2), "dua");
        equal(bahasaToWords(3), "tiga");
        equal(bahasaToWords(4), "empat");
        equal(bahasaToWords(5), "lima");
        equal(bahasaToWords(6), "enam");
        equal(bahasaToWords(7), "tujuh");
        equal(bahasaToWords(8), "delapan");
        equal(bahasaToWords(9), "sembilan");
    });

    test("teens", function () {
        equal(bahasaToWords(11), "sebelas");
        equal(bahasaToWords(12), "dua belas");
        equal(bahasaToWords(13), "tiga belas");
        equal(bahasaToWords(14), "empat belas");
        equal(bahasaToWords(15), "lima belas");
        equal(bahasaToWords(16), "enam belas");
        equal(bahasaToWords(17), "tujuh belas");
        equal(bahasaToWords(18), "delapan belas");
        equal(bahasaToWords(19), "sembilan belas");
    });

    test("hundreds", function () {
        equal(bahasaToWords(100), "seratus");
        equal(bahasaToWords(200), "dua ratus");
        equal(bahasaToWords(300), "tiga ratus");
        equal(bahasaToWords(400), "empat ratus");
        equal(bahasaToWords(500), "lima ratus");
        equal(bahasaToWords(600), "enam ratus");
        equal(bahasaToWords(700), "tujuh ratus");
        equal(bahasaToWords(800), "delapan ratus");
        equal(bahasaToWords(900), "sembilan ratus");
    });

    test("thousands", function () {
        equal(bahasaToWords(100000), "seratus ribu");
        equal(bahasaToWords(101000), "seratus satu ribu");
        equal(bahasaToWords(102000), "seratus dua ribu");
        equal(bahasaToWords(103000), "seratus tiga ribu");
        equal(bahasaToWords(104000), "seratus empat ribu");
        equal(bahasaToWords(105000), "seratus lima ribu");
        equal(bahasaToWords(106000), "seratus enam ribu");
        equal(bahasaToWords(107000), "seratus tujuh ribu");
        equal(bahasaToWords(108000), "seratus delapan ribu");
        equal(bahasaToWords(109000), "seratus sembilan ribu");
        equal(bahasaToWords(110000), "seratus sepuluh ribu");
    });

    test("overflows", function () {
        equal(bahasaToWords(1000000000), "terlalu besar");
        equal(bahasaToWords(-1000000000), "terlalu kecil");
    });

});
