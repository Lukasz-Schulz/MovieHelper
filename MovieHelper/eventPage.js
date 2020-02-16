var contextMenuItem = {
    "id": "goToReviews",
    "title": "See reviews",
    "contexts": ["selection"]
};


chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(selected){
    let searchTerm;
    if (selected.menuItemId == "goToReviews" && selected.selectionText){
        searchTerm = selected.selectionText;
        let pages = [];
        pages = JSON.parse(localStorage.getItem('pages'));
        for(page of pages) {
            let url =  `http://www.google.com/search?q=${page} ${searchTerm}&btnI`;
            openInNewTab(url);
        }
    }
})

function openInNewTab(url) {
    var win = window.open(url);
    // win.focus();
  }