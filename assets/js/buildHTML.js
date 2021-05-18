window.buildHTML = (function(){

    function _addAttribute(element) {
        return function(name, value) {
            name = name === 'HTMLfor' ? 'for': name;
            name = name === 'className' ? 'class': name;
            element.setAttribute(name, value);
        }
    }

    function _addEventListiner(element) {
        return function(eventName, fn) {
            eventName = eventName.slice(2, eventName.length);
            element.addEventListener(eventName, fn);
        }
    }

    function _buildElement(tagName, props) {
        const element = document.createElement(tagName);
        
        const attributesAndEvents = Object.keys(props);
        const eventsName = attributesAndEvents.filter(attributeName => attributeName.includes('on'));
        const attributsName = attributesAndEvents.filter(attributeName => !attributeName.includes('on'));
        
        const addAttributes = _addAttribute(element);
        const addEvents = _addEventListiner(element);

        eventsName.forEach( nameEvent => {
            addEvents(nameEvent, props[nameEvent]);
        });

        attributsName.forEach( attributeName => {
            addAttributes(attributeName, props[attributeName])
        });

        return element;
    }


    function _makeHTML(element) {
        if (Object.prototype.toString.call(element).includes("String")) {
            return document.createTextNode(element);
        }

        const elementCurrent = _buildElement(element.tagName, element.props);
        element.children.forEach( virtualChild => {
            const child = typeof virtualChild === 'function' ? createElement(virtualChild): virtualChild;
            elementCurrent.appendChild(_makeHTML(child));
            
        })

        return elementCurrent;
    }
    
    
    function createElement(tagNameOrElement, props, ...children) {
    
        if(typeof tagNameOrElement === 'function') {
            return tagNameOrElement({ props, children })
        }
        
        return {
            tagName: tagNameOrElement,
            props,
            children
        }
    }

    function render(initalElement, element) {
        const elementsHTML = _makeHTML(element);
        initalElement.append(elementsHTML)
    }


    return {
        createElement,
        render
    }
})();
