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