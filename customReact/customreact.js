function customRender(reactElement, container){
    /*
    const domElement= document.createElement(reactElement.type) //ELEMENT CREATED
    //UNTIL NOW CONTAINER is empty so inject elements
    //create 
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    //inject elemnts
    container.appendChild(domElement)

    //dom.setattribute m prblm aati agatr ek div ya ek element hota toh
    */
     
    const domElement= document.createElement(reactElement.type) //ELEMENT CREATED
    //create 
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
        //inject elemnts
    container.appendChild(domElement)


}

//element evaluation // tree m is step se js code ko convert krte h
const reactElement ={//react k thorugh milta h but we r designing it, har element is prakar se likhna padega
    type: 'a' ,
    props: {
        href: 'https://google.com' ,
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//just like react ek root create krta h
const maincontainer = document.querySelector('#root')

//render krna (method that adds react element to root)
//fn(kisko render , kisme render)
customRender(reactElement, maincontainer)
