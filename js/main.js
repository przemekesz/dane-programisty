 $("#btn").click(function () {
     $("body").append('<div id="dane-programisty"></div>');
 });
 $("#btn").click(function () {
     $.ajax({
             type: "GET",
             url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
             data: {
                 get_param: "value"
             },
             dataType: "json",
             success: (function (dane) {
                 $.each(dane, function (index, e) {
                     $("#dane-programisty").append(index + ": " + e + "<br>");

                 })

             })
         })
     })
 
