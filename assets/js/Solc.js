const adviceText = document.querySelector(".advice"),
quoteBtn = document.querySelector("button")
// adding links to social media buttons//

//twitterBtn = document.querySelector(".twitter")

githubBtn = document.querySelector(".github")

slackBtn = document.querySelector(".slack")

linkedinBtn = document.querySelector(".linkedin")



function randomQuote(){
    quoteBtn.innerText = "A minute..";// adding load
    //fetching data from an api
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        adviceText.innerText = result.content;
        quoteBtn.innerText = "New Advice"
    })
}

quoteBtn.addEventListener("click", randomQuote);
twitterBtn.addEventListener("click", () => {
    //opening twitter for a new tweet
   let tweetUrl = `https://twitter.com/intent/tweet?url=${adviceText.innerText}`;
   window.open(tweetUrl, );
} );

slackBtn.addEventListener("click", () => {
    //opening slack for a new slack
   let slackUrl = `https://app.slack.com/client/TCYEB44S2/composer/draft-07f9e46f-8913-441c-a58f-957d97381c62?url=${adviceText.innerText}`;
   window.open(slackUrl, );
} );

githubBtn.addEventListener("click", () => {
    //opening github
   let githubUrl = `https://github.com/new?url=${adviceText.innerText}`;
   window.open(githubUrl, );
} );

linkedinBtn.addEventListener("click", () => {
    //opening linkedin
   let linkedinUrl =  `https://www.linkedin.com/messaging/thread/new?url=${adviceText.innerText}`;
   window.open(linkedinUrl, );
} );*/