# buildHTML

build HTML is a set of utilities to assist the creation of html within the javacript

## code example 

import the `buildHTML.js` file and then use the example below

```JS
function App {

    return buildHTML.createElement('h1', {}, 'Hello World');
}

buildHTML.render(document.getElementById('app'), buildHTML.createElement(App));
```