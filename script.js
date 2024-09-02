//selecting popupbox and popup and button 
var popup = document.querySelector(".popup")
var popupbox = document.querySelector(".popupbox")
var addpopupbtn = document.getElementById("addpop")

addpopupbtn.addEventListener("click", function () {
    popup.style.display = "block"
    popupbox.style.display = "block"
})
//selecting cancel button in popup 
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
    popup.style.display = "none"
    popupbox.style.display = "none"


})

var addbtn = document.getElementById("add-book")

addbtn.addEventListener("click", function (event) {
    event.preventDefault()

})
//select container ,add-book,book-title,book-author-input,desc
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleip = document.getElementById("book-title")
var bookauthip = document.getElementById("book-auth")
var bookdescip = document.getElementById("book-desc")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "bookcon")
    div.innerHTML = `<h1>${booktitleip.value}</h1>
            <h5>${bookauthip.value}</h5>
            <p>${bookdescip.value}</p>
            <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popup.style.display = "none"
    popupbox.style.display = "none"
})
function deletebook(event) {
    event.target.parentElement.remove()
}