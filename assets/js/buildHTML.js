window.buildHTML = (function(){
    function createElement (elementOrTagName, attributes, valueOrchildren) {
        let element;
        
        if(typeof tagName === 'function') {
            element = elementOrTagName();
        } else {
            element = document.createElement(elementOrTagName);
    
            listOfAtributtes = Object.entries(attributes);
    
            listOfAtributtes.forEach(([attribute, value]) => {
                element.setAttribute(attribute, value);
            });
        }
    
    
        if (typeof valueOrchildren === 'object') {
    
            const [ , , ...elements] = [...arguments];
            elements.forEach( el => element.append(el));
    
        } else {
            element.textContent = valueOrchildren;
        }
    
        return element;
    
    }
    
    function renderHTML (selector, app) {
        const element = app();
        document.querySelector(selector)
            .appendChild(element);
    }

    return {
        createElement,
        renderHTML
    }


})()