$("#body-field").on("keyup", function(){
    length = $(this).val().length;
    $("#body-count").html(length);
}); 
