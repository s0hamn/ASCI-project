console.log("This is my website")

let width = window.outerWidth;

if (width < 1000) {
    let projects = document.getElementsByClassName('project');

    Array.from(projects).forEach(function(element, index) {
        let projInfo = element.getElementsByClassName('proj-info')[0].outerHTML;
        let projImg = element.getElementsByClassName('proj-img')[0].outerHTML;

        let newHTML = projImg + projInfo;

        element.innerHTML = newHTML

        console.log(newHTML);
    })
}