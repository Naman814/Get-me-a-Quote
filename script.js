fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
      quoteData=data.content
      author="-"+data.author
      document.getElementById('quote').innerHTML=quoteData;
      document.getElementById('author').innerHTML=author
  })
