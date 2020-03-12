$(document).ready(function() {
  const date = new Date();
  const currentDate = date.toLocaleString();
  $(".date").html("Current Datetime: " + currentDate);

  $("#add-btn").on("click", addItemToList);
  $(".delete-btn").on("click", deleteItem);
});

function addItemToList(e) {
  e.preventDefault();
  const input = $("#new-task").val();
  $(".list").append(
    `<li>${input}<img class="delete-btn" src="trash-alt-solid.svg" /></li>`
  );
  $(".delete-btn").on("click", deleteItem);
  $("#new-task").val("");
}

function deleteItem(e) {
  const selectedItem = $(e.target).parent();
  selectedItem.remove();
}
