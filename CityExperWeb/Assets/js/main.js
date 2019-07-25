$(document).ready(function () {
    var data = {
        Ilid : null,
        Ilceid : null,
        Mahalleid : null,
        CaddeSokakid : null,
    }
    $('#il').change(function () {
        $.ajax({
            url: "/ilce/ilcelerbyilId", //burdaki url controller/actiondır
            data: { ilid: $(this).val() },//datamdacontrollera gönderdiğim parametredir ilId  olarakgönderdim tanımlamalaraynıolcak
            dataType: "JSON",
            success: function (result) { //yani controllerdan bana data döndüğünde dönen data result a atılır. 
                var ilce = $("#ilceListAdres"); //ilce select optionumu aldım
                ilce.empty();
                $.each(result, function (i, item) { // each javascript döngsüdür ilce sayısıkadar döner. 
                    ilce.append($("<option></option>").attr("value", item.ilce_id).html(item.ilceAdi));
                    //append eklemektir ilce sayısıkadar option ekledim + attr  budaoption value="ilce_id" html ile ilceadlarınıyazdırdım
                });
            }
        });
        //$.ajax({
        //    url: "/ilce/PoligonGetir", //burdaki url controller/actiondır
        //    data: { plaka: $(this).val() },//datamdacontrollera gönderdiğim parametredir ilId  olarakgönderdim tanımlamalaraynıolcak
        //    dataType: "JSON",
        //    success: function (result) { //yani controllerdan bana data döndüğünde dönen data result a atılır. 
        //    }
        //});
        data.Ilid = $(this).val();
        LoadMap_main(data);
    });
    //ilceListAdres değiştiğinde  function çalışır
    $('#ilceListAdres').change(function () {
        $.ajax({
            url: "/mahalle/mahallebyilceid", //burdaki url controller/actiondır
            data: { ilceid: $(this).val() },//datamdacontrollera gönderdiğim parametredir ilId  olarakgönderdim tanımlamalaraynıolcak
            dataType: "JSON",
            success: function (result) { //yani controllerdan bana data döndüğünde dönen data result a atılır. 
                console.log(result);
                var mahalle = $("#MahalleListAdres"); //ilce select optionumu aldım
                mahalle.empty();
                $.each(result, function (i, item) { // each javascript döngsüdür ilce sayısıkadar döner. 
                    mahalle.append($("<option></option>").attr("value", item.mahalle_id).html(item.mahalleAdi));
                    //append eklemektir ilce sayısıkadar option ekledim + attr  budaoption value="ilce_id" html ile ilceadlarınıyazdırdım
                });
            }
        });
        data.Ilceid = $(this).val();
        LoadMap_main(data);
    });
    $('#MahalleListAdres').change(function () {
        $.ajax({
            url: "/Sokak_Cadde/caddeSokakBymahalleid", //burdaki url controller/actiondır
            data: { mahalleid: $(this).val() },//datamdacontrollera gönderdiğim parametredir ilId  olarakgönderdim tanımlamalaraynıolcak
            dataType: "JSON",
            success: function (result) { //yani controllerdan bana data döndüğünde dönen data result a atılır. 
                console.log(result);
                var sokak = $("#SokakListAdres"); //ilce select optionumu aldım
                sokak.empty();
                $.each(result, function (i, item) { // each javascript döngsüdür ilce sayısıkadar döner. 
                    sokak.append($("<option></option>").attr("value", item.caddeSokak_id).html(item.caddeSokakAdi));
                    //append eklemektir ilce sayısıkadar option ekledim + attr  budaoption value="ilce_id" html ile ilceadlarınıyazdırdım
                });
            }
        });
    });
 
});