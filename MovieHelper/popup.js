$(function(){
    $("#name").keyup(function(){
        $("#greet").text("Hello " + $("#name").val());
        openInNewTab();
    })
})
let title = "jojo rabbit"
let url = `http://www.google.com/search?q=rotten tomatoes ${title}&btnI`

function openInNewTab() {
    var win = window.open(url);
    win.focus();
  }