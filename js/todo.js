// listening

$(function(){
	$("#todo_submit").on('click', addToDo);
	$('#todo_checkbox').on('click', removeToDo);
});



// adding to dos

function addToDo(event) {
	event.preventDefault();
	var todoitem = $("#todo_entry").val();
		$("#todolist").append("<li><input type='checkbox' name='todo_checkbox' id='todo_checkbox' value='"+todoitem+"'>"+todoitem+"</li>");
		$("#todo_entry").val("");
};



// removes to dos

function removeToDo() {
	var todoitem = $("input:checked");
	$("#todolist").remove("<li><input type='checkbox' name='todo_checkbox' id='todo_checkbox' value='"+todoitem+"'>"+todoitem+"</li>");
};




// $(function(){
//  	$("#todo_checkbox").click(function(event) {
//  		var todoitem = $("input:checked").val();
// 		$("#todolist").remove("<li><input type='checkbox' name='todo_checkbox' id='todo_checkbox' value='"+todoitem+"'>"+todoitem+"</li>");
//   	});
// });



// step one listen for when checkmark is put in box
// step two specify which list item will be removed
// final step remove item from page