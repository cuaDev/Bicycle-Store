var modalUser = document.querySelector(".modal_user")
var modalSearch = document.querySelector(".modal_search")
var handleModalUser = () => {
    if (modalUser.style.display == "") {
        modalUser.style.display = "block"
    }
    else
        modalUser.style.display = ""
}


var handleModalSearch = () => {
    if (modalSearch.style.display == "") {
        modalSearch.style.display = "block"
    }
}

var handleCloseModalSearch = () => {
    modalSearch.style.display = ""

}