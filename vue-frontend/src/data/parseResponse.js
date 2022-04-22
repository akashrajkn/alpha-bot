function removePunctuation(text) {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}


function parseHighlightTextResponse(response) {

  const text = response.text.split(' ');
  let items = text.map(word => {

    let normWord = removePunctuation(word).toLowerCase();

    return {
      'value' : word,
      'highlight' : response.symptoms.includes(normWord)
    };
  });

  return items;
}

export {
  parseHighlightTextResponse,
}
