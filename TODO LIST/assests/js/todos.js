
//check off specific Todos by clicking
$("ul").on("click", "li", function(){
	//if li is gray turn it black and remove text-decoration and vice versa
	$(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){  // the parent function returns selected object's(span) immediate parent.
		$(this).remove(); /*here we are not using parent function because, 
							as we have already brought the parent element of that span e.g. li. So, we are now currently working with li not the span anymore.*/
	});
	event.stopPropagation(); //this function ensures that other events attached to span won't occur
});

$("input[type= 'text'").on("keypress", function(event){
		//checking if enter key is pressed. character code of enter key is 13
		if (event.which === 13) { 
			var todoText = $(this).val();
			$(this).val("");
			//create a new li and add it to ul
			$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText +"</li>");
		}
})

$(".fa-plus").on("click", function(){
	$("input[type= 'text'").fadeToggle(500);
})
