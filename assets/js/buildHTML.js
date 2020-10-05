window.buildHTML = (function(){

    function addChildElement(element, children) {
        const [ , , ...elements] = [...children];
        elements.forEach( el => element.append(el));
    }



    function createElement (elementOrTagName, attributes, valueOrchildren) {
        let element;
        
        if(typeof tagName === 'function') {
            element = elementOrTagName();
        } else {
            element = document.createElement(elementOrTagName);
    
            listOfAtributtes = Object.entries(attributes);
    
            listOfAtributtes.forEach(([attribute, value]) => {
                if (typeof value === 'function') {
                    element.addEventListener(attribute, value);
                    return;
                }
                element.setAttribute(attribute, value);
            });
        }
    
        
        if (typeof valueOrchildren === 'object') {
            addChildElement(element, arguments)
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


})();
