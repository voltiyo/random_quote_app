import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function GetQuote(){
  let writer = document.getElementById("author");
  let app = document.getElementById("App");
  let text = document.getElementById("text");
  let link = document.getElementById("tweet-quote");
  let bg = [
    "#F5DEB3",
    "#FFA500",
    "#FFC0CB",
    "#0000FF",
    "#00FFFF",
    "#00FF00",
    "#008000",
    "#FFFFFF",
    "#F0F0F0",
    "#D8CFC4",
    "#A3B9D4",
    "#1A2A6C",
    "#6A0DAD",
    "#008080",
    "#50C878",
    "#FFBCB3",
    "#FF6F61",
    "#FFF34D",
    "#C2B280",
    "#228B22",
    "#87CEEB",
    "#6B8E23",
    "#D2B48C",
    "#FFB6C1",
    "#E6E6FA",
    "#98FF98",
    "#FFFACD",
    "#333333",
    "#000000",
    "#800020",
    "#191970",
    "#F8F8F8",
    "#708090",
    "#B0B0B0",
    "#A6B9D9",
]

  let btn1 = document.getElementById("tweet-quote");
  let btn2 = document.getElementById("new-quote");
  
  fetch("https://quoteslate.vercel.app/api/quotes/random")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    writer.innerHTML = data.author;
    text.innerHTML = data.quote

    let customBg = bg[Math.floor(Math.random() * bg.length)];
    
    app.style.backgroundColor = customBg;
    btn1.style.backgroundColor= customBg;
    btn2.style.backgroundColor= customBg;
    writer.style.color = customBg;
    document.getElementById("quotee-box").style.color = customBg;
    let quote = data.quote
    let linktext = quote.replace(/ /g,"%20");
    link.href = "https://twitter.com/intent/tweet?text=" + linktext  + data.author;
    link.target = "_blank";
  })
}

function App() {
  window.onload = GetQuote;
  return (
    <div className="App" id='App'>
      <div id="quote-box">
        <div id="quotee-box">
          <i className="bi bi-quote"></i>
          <p id="text"></p>
          <p id="author"></p>
        </div>
        <div className="buttons">
        
          <a href="" title='tweet quote' id='tweet-quote'>
              <i className="fa fa-twitter"></i>
          </a>
        
        <a id="new-quote" target='_blank' onClick={GetQuote}>
          New Quote
        </a>
          
        </div>
      </div>
    </div>
  );
}

export default App;
