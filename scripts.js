function CurrentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var second = date.getSeconds();
  document.getElementById("clockP").innerText =
    hour + " : " + min + " : " + second;
  var t = setTimeout(function () {
    CurrentTime();
  }, 1000);
}
CurrentTime();
