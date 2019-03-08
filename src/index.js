import { loadCharacterContainer } from './make-character-template.js';
import { readFromQuery } from './hash-query.js';
import './search-component.js';
import './paging-component.js';
import { updateSpeciesDropDown } from './search-component.js';
import makeSearchSpeciesUrl from './make-search-species-url.js';


window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    
    updateSpeciesDropDown(queryOptions.species);

    const url = makeSearchSpeciesUrl(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCharacterContainer(body.results);
        });
});
