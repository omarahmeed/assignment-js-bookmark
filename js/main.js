var bookmarkName = document.getElementById('bookmarkName');
var bookmarkUrl = document.getElementById('bookmarkURL');
tableBody = document.getElementById('tableBody')
// tableBody.innerHTML = ``
var sitesContainer = [];
if (localStorage.getItem('newSites') != null) {

    sitesContainer = JSON.parse(localStorage.getItem('newSites'))
    displaySites(sitesContainer)
}

function addSite() {

    if (validateSiteName() == true && validateSiteUrl() == true) {
        var Sittes = {
            siteName: bookmarkName.value,
            siteUrl: bookmarkUrl.value
        }
        sitesContainer.push(Sittes)
        localStorage.setItem("newSites", JSON.stringify(sitesContainer))

        displaySites(sitesContainer);
        clearForm();

    }
    else {
        alert("invalid url")
    }

}
function clearForm() {

    bookmarkName.value = '';
    bookmarkUrl.value = '';
}
function displaySites(arr) {
    var cartoona = ``

    for (var i = 0; i < arr.length; i++) {
        cartoona += `
        <tr>
       <td>${i + 1}</td>
        <td>${sitesContainer[i].siteName}</td>
        
         <td>
             <button class="btn btn-visit btn-warning" data-index="0">
             <i class="fa-solid fa-eye pe-2"></i>

             <a target="_blank" href="${sitesContainer[i].siteUrl}">Visit</a>   
             </button>
         </td>
         <td>   

             <button onclick="deleteProducts(${i});" class="btn btn-delete btn-danger pe-2" data-index="0">
             <i class="fa-solid fa-trash-can"></i>
                 Delete
             </button>
         </td>
         </tr>`


    }
    tableBody.innerHTML = cartoona;
}



function deleteProducts(productIndex) {
    sitesContainer.splice(productIndex, 1)
    localStorage.setItem("newSites", JSON.stringify(sitesContainer))
    displaySites(sitesContainer)
}

function validateSiteName() {

    var regex = /^\w{3,}(\s+\w+)*$/
    if (regex.test(bookmarkName.value) == true) {
        return true;

    }
    else {
        return false;
    }
}
function validateSiteUrl() {

    var regexUrl = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
    if (regexUrl.test(bookmarkUrl.value) == true) {
        return true;

    }
    else {
        return false;
    }
}