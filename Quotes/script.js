const url = "https://talaikis.com/api/quotes/random/";

function getQuote() {
  fetch(url).then(
    (res) => {
       console.log("Here");
       return res.json();
    }
  ).then((data) => {
    document.getElementById("block-quote__content").innerHTML = '"' + data['quote'] + '"';
    document.getElementById("block-quote__author").innerHTML = data['author'];
  }).catch(error => console.log(error));  
}

function displayQuote() {
  document.getElementsByTagName("button").onclick = getQuote();
}




