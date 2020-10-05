# buildHTML

build HTML is a set of utilities to assist the creation of html within the javacript

## code example 

import the `buildHTML.js` file and then use the example below

```JS
const Header = () => {

    return (
        buildHTML.createElement('header', { class: 'header' }, 
            buildHTML.createElement('a', { href: '#'}, 'traça'),
            buildHTML.createElement('nav', {class: 'menu'}, 
                buildHTML.createElement('ul', {class: 'menu__list'},
                    buildHTML.createElement('li', {class: 'menu__item'},
                        buildHTML.createElement('a', { href: 'menu__link'},
                            'Home'
                        )
                    ),
                    buildHTML.createElement('li', {class: 'menu__item'},
                        buildHTML.createElement('a', { href: 'menu__link'},
                            'About'
                        )
                    ),
                    buildHTML.createElement('li', {class: 'menu__item'},
                        buildHTML.createElement('a', { href: 'menu__link'},
                            'Contact'
                        )
                    )
                )
            )
        )
    )
};


buildHTML.renderHTML('#app', Header);
```