const text=document.getElementById("quote_text");
const author=document.getElementById("author_name");
const tweetButton=document.getElementById("twitter");

const getNewQuote = async () =>
{
    let url="https://type.fit/api/quotes";    
    const response=await fetch(url);
    const allQuotes = await response.json();
    const indx = Math.floor(Math.random()*allQuotes.length);
    const quote=allQuotes[indx].text;
    const auth=allQuotes[indx].author;
    if(auth==null){
        auth = "Anonymous";
    }
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+"  ~  "+auth;
}
getNewQuote();