$(document).ready(function() {
  $("#OkBtn").click(function () {
    console.log("Huy: " + $("input").val());
    if ($("input").val() != "") {
      console.log($("input").val());
      var task = document.createElement("div");
      task.className = "alert  alert-success alert-dismissible"
      task.innerHTML = $("input").val();
      // task.appendChild("<button type="/button/" class="/close/" data-dismiss="/alert/">&times;</button>");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "close";
      btn.setAttribute("data-dismiss", "alert");
      btn.innerHTML = "&times";
      task.appendChild(btn);
      document.getElementById("to-do-list").appendChild(task);
      $("input").val('');
    }
  });
  $("#CancelBtn").click(function () {
    $("input").val('');
    $("input").focus();
  });
})

