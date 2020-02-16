var contextMenuItem = {
    "id": "goToReviews",
    "title": "See reviews",
    "contexts": ["selection"]
};

let pages = ["rotten tomatoes", "filmweb"];


chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(selected){
    alert(3);
    let searchTerm;
    if (selected.menuItemId == "goToReviews" && selected.selectionText){
        searchTerm = selected.selectionText;
        let pages = [];
        alert(4);
        pages = JSON.parse(localStorage.getItem('pages'));
        alert(pages);
        for(page of pages) {
            alert(page);
            let url =  `http://www.google.com/search?q=${page} ${searchTerm}&btnI`;
            openInNewTab(url);
        }
    }
})

function openInNewTab(url) {
    var win = window.open(url);
    win.focus();
  }