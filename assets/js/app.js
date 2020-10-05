function Application () {

    return (
        buildHTML.createElement('div', { id: 'app'},
            Header
        )
    );
}

function Header () {
    return (

        buildHTML.createElement('header',
        {
            class: 'header'
        },
            buildHTML.createElement('a',
            {
                class: 'logo',
                href: '#'
            },
            'Logo'
            ),
            buildHTML.createElement('nav',
            {
                class: 'menu'
            },
                buildHTML.createElement('ul',
                {
                    class: 'menu__list'
                },
                    buildHTML.createElement('li',
                    {
                        class: 'menu__item'
                    },
                        buildHTML.createElement('a',
                        {
                            class: 'menu__item',
                            href: '#'
                        },
                          'HOME'  
                        )
                    ),
                    buildHTML.createElement('li',
                    {
                        class: 'menu__item'
                    },
                        buildHTML.createElement('a',
                        {
                            class: 'menu__item',
                            href: '#'
                        },
                          'HOME'  
                        )
                    ),
                    buildHTML.createElement('li',
                    {
                        class: 'menu__item'
                    },
                        buildHTML.createElement('a',
                        {
                            class: 'menu__item',
                            href: '#'
                        },
                          'HOME'  
                        )
                    )
                )

            )
        )
    );
}

buildHTML.renderHTML('#app', Application);

