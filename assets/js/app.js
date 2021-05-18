function App() {
    const style = `
        width: 95%;
        background-color: #F1F1F3;
        margin-left: auto;
        margin-right: auto;
    `;
    return buildHTML.createElement('div', {id: 'header', style}, Header);
}

function Header () {

    const headerStyle = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 65px;
        background-color: #EFA;
    `;

    const menuStyle = ``;
    const menuListStyle = `
        display: flex;
        list-style-type: none;
    `;
    const menuListItemStyle = `
        
    `;
    const menuText = `
        text-decoration: none;
        font-size: 1.3rem;
        padding: 5px 10px;
        color: #080808;
    `;

    return buildHTML.createElement('header', { style: headerStyle},
        buildHTML.createElement('div', {}, 
            buildHTML.createElement('a', {href: '#'},
                'My Logo'
            )
        ),
        buildHTML.createElement('nav', { style: menuStyle }, 
            buildHTML.createElement('ul', { style: menuListStyle }, 
                buildHTML.createElement('li', { style: menuListItemStyle }, 
                    buildHTML.createElement('a', {href: '#', style: menuText}, 'Item 1')
                ),
                buildHTML.createElement('li', { style: menuListItemStyle }, 
                    buildHTML.createElement('a', {href: '#', style: menuText}, 'Item 2')
                ),
                buildHTML.createElement('li', { style: menuListItemStyle }, 
                    buildHTML.createElement('a', {href: '#', style: menuText}, 'Item 3')
                ),
                buildHTML.createElement('li', { style: menuListItemStyle }, 
                    buildHTML.createElement('a', {href: '#', style: menuText}, 'Item 4')
                ),
            )
        )
    );
}

buildHTML.render(document.getElementById('app'), buildHTML.createElement(App));