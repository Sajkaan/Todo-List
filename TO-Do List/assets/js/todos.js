// Check off todos by clicking
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		//remove the li
		$(this).remove();
	});
	event.stopPropagation();
});

//input listener
$("input[type='text']").keypress(function(event){
	//check if enter is pressed
	if(event.which === 13){
		//grab new text that is writen
		var todoText = $(this).val();
		//clear the input
		$(this).val("");
		//create a new li
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});