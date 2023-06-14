//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Check if the body tag is empty
  var bodyIsEmpty = document.body.innerHTML.trim() === "";

  if (bodyIsEmpty) {
    // Write the string on the web page
    var message = "DOM load success";
    var paragraph = document.createElement("p");
    var textNode = document.createTextNode(message);
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);
  }
});
