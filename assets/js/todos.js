//check off completed item
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");   
});

//delete element
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();  
    });
    e.stopPropagation();
})

//adding element
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var toDoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText +"</li>")
        $(this).val("");
    }
    
})


//toggling todolist
$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
})