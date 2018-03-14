

$.ajax({
    type: "GET",
    url:"https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
    data: {get_param: "value"},
    dataType: "json",
    success: function(){
        $("#btn").click(function(dane){
        $.each(dane, function(index, e){
            $("#dane-programisty").append(index +": " + e)
            
        })
        
})
}
})
        
        
        
/*
      var myJSON = JSON.parse(objJSON);
        $("#btn").click(function(){
        $("#dane-programisty").load("Nazwisko: " + myJSONJSON.nazwisko);  
        
        })
    
    }
})
})




*/





/*$(document).ready(function () {
    var objJSON = {
        "imie": "Piotr",
        "nazwisko": "Szapiel",
        "zawod": "Programista",
        "firma": "Akademia 108"
    };
    var myJSON = JSON.parse(objJSON);
    $("#btn").click(function(){
        $("#dane-programisty").load("Nazwisko: " + myJSONJSON.nazwisko);
        
        
    })






});*/
