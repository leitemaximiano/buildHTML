

const Header = () => {

    return (
        buildHTML.createElement('header', { class: 'header' }, 
            buildHTML.createElement('a', { href: '#'}, 'traça'),
            buildHTML.createElement('nav', {class: 'menu'}, 
                buildHTML.createElement('ul', {class: 'menu__list'},
                    buildHTML.createElement('li', {class: 'menu__item'},
                        buildHTML.createElement('a', { class: 'menu__link',  href: '#'},
                            'Home'
                        )
                    ),
                    buildHTML.createElement('li', {class: 'menu__item'},
                        buildHTML.createElement('a', { class: 'menu__link',  href: '#'},
                            'About'
                        )
                    ),
                    buildHTML.createElement('li', { class: 'menu__item', href: '#'},
                        buildHTML.createElement('a', 
                        { 
                            class: 'menu__link',
                            href: '#',
                            click: function (event) {
                                event.defalt
                                console.log(event.target);
                            }
                        },
                            'Contact'
                        )
                    )
                )
            )
        )
    )
}


buildHTML.renderHTML('#app', Header)