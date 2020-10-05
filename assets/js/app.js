function Application () {

    return (
        buildHTML.createElement('div', { id: 'app'},
            Header,
            buildHTML.createElement('table', {}, 
                buildHTML.createElement('thead', {}, 
                    buildHTML.createElement('tr', {}, 
                        buildHTML.createElement('th', {}, '#'),
                        buildHTML.createElement('th', {}, 'nome'),
                        buildHTML.createElement('th', {}, 'email'),
                        buildHTML.createElement('th', {}, 'ações')
                    )
                ),
                buildHTML.createElement('tr', {},
                    buildHTML.createElement('td', {}, '1'),
                    buildHTML.createElement('td', {}, 'mariana melo'),
                    buildHTML.createElement('td', {}, 'maria@gmail.com'),
                    buildHTML.createElement('td', {}, 
                        buildHTML.createElement('a', { href: '#'}, 'edit'),
                        buildHTML.createElement('a', { href: '#'}, 'excluir')
                    ),
                ),
                buildHTML.createElement('tr', {},
                    buildHTML.createElement('td', {}, '1'),
                    buildHTML.createElement('td', {}, 'mariana melo'),
                    buildHTML.createElement('td', {}, 'maria@gmail.com'),
                    buildHTML.createElement('td', {}, 
                        buildHTML.createElement('a', { href: '#'}, 'edit'),
                        buildHTML.createElement('a', { href: '#'}, 'excluir')
                    ),
                )
            ),
            buildHTML.createElement('input', {value: 'maximiano'})
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

