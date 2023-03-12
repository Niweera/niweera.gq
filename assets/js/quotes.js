function createInnerHTMLFunction() {
  fetch(`https://api.api-ninjas.com/v1/quotes`, {
    headers: { "X-Api-Key": "gbYo/oGi+Q+3OV/l1Wjuvw==fdYORtmwyW0ea97n" }, //Hey, I don't care if you steal my API key, it's free and I don't care if you use it. I'm not going to pay for a quote API.
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("quote").innerHTML =
        '"' + data[0].quote.trim() + '"' + "<br>- " + data[0].author;
    })
    .catch(console.log);
}

createInnerHTMLFunction();
