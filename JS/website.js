console.log("This is my website")

let width = window.outerWidth;
var MenuItems = document.getElementById("MenuItems");
if (width < 1000) {
    let projects = document.getElementsByClassName('project');

    Array.from(projects).forEach(function(element, index) {
        element.getElementsByClassName('proj-info')[0].removeAttribute('data-aos');
        let projInfo = element.getElementsByClassName('proj-info')[0].outerHTML;
        let projImg = element.getElementsByClassName('proj-img')[0].outerHTML;

        let newHTML = projImg + projInfo;

        element.innerHTML = newHTML
        MenuItems.style.maxHeight = "0px";

        // console.log(newHTML);

    })

    let myinfoNameH1 = document.getElementsByClassName('my-name-info')[0].getElementsByTagName('h1')[0];

    myinfoNameH1.innerText = `Soham N`;
}




function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}