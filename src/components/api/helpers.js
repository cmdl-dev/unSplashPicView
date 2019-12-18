import {UNSPLASH_ACCESS, UNSPLASH_BASE} from './constants';
export const fetchUnsplash = (path, query) => {
  try {
    // Creates an new url object from the base and the path
    const url = new URL(path, UNSPLASH_BASE);
    // applies the query parameters to the url
    url.searchParams.append('client_id', UNSPLASH_ACCESS);
    url.searchParams.append('query', query);
    return fetch(url.href)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(e => {
        throw new Error(e);
      });
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
