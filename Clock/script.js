function displayTime() {
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  document.getElementById("time-now").innerHTML = hour + ":" + minute + ":" + second;
  setInterval(displayTime,1000);
}
function convertToHexCode(rr, gg, bb) {
  rr = rr.toString(16);
  gg = gg.toString(16);
  bb = bb.toString(16);
  if (rr.length < 2) {
    rr = "0" + rr;
  }
  if (gg.length < 2) {
    gg = "0" + gg;
  }
  if (bb.length < 2) {
    bb = "0" + bb;
  }
  return "#" + rr + gg + bb; 
}
function idealTextColor(rr,gg,bb) {

  var nThreshold = 105;
  var bgDelta = (rr * 0.299) + (gg * 0.587) + (bb * 0.114);

  return ((255 - bgDelta) < nThreshold) ? "#000000" : "#ffffff";
}

function displayColorCode() {
  var rr = Math.floor((Math.random() * 255) + 0);
  var gg = Math.floor((Math.random() * 255) + 0);
  var bb = Math.floor((Math.random() * 255) + 0);
  var hexcode = convertToHexCode(rr, gg, bb);
  console.log(hexcode);
  document.body.style.backgroundColor = hexcode;
  document.body.style.color = idealTextColor(rr, gg, bb);
  document.getElementById("background-color-now").innerHTML = hexcode; 
  setInterval(function() {
    bb++;
    if (bb > 255) {
      bb = 0;
      gg++;
    }
    if (gg > 255) {
      gg = 0;
      bb = 0;
      rr++;
    }
    if (rr > 255) {
      rr = 0;
      gg = 0; 
      bb = 0;
    }
    var hexcode = convertToHexCode(rr,gg,bb);
    console.log(hexcode);
    document.body.style.backgroundColor = hexcode;
    document.body.style.color = idealTextColor(rr,gg,bb);
    document.getElementById("background-color-now").innerHTML = hexcode; 
  }, 1000);
}

document.body.onload = displayTime(), displayColorCode();

