window.buildHTML = (function(){

    function addChildElement(element) {
        return function (value) {
            if (typeof value === 'object') {
                element.append(value);
            } else if (typeof value === 'function') {
                element.append(value());
            } else {
                element.textContent = value;
            }
        }
    }



    function createElement (elementOrTagName, attributes, ...valueOrchildren) {
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

        valueOrchildren.forEach(addChildElement(element));
    
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
