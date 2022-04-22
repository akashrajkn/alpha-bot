
import { API_URL } from './network';

export async function getHighlightedText(text) {

  const response = await fetch(`${API_URL}/highlight-text`, {
    method  : 'POST',
    headers : {
      'Content-Type' : 'application/json',
      'Accept'       : 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body   : JSON.stringify({
      "text": text
    }),
  });

  // TODO: handle error
  const data = await response.json();

  return data
}
