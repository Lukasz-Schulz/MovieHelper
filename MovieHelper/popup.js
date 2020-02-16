$(function(){
    let storage = localStorage.getItem('pages');
    if(storage) {
        for(page of JSON.parse(storage)){
            let node = document.createElement("LI");
            let textnode = document.createTextNode(page);
            node.append(textnode);
            $('#pages').append(node);
        
        }
    }

    $("#add").click(function(){
            let list = JSON.parse(localStorage.getItem('pages'));
            let newList = [];
            if(list) {
                newList = list;
            }

            let newPage = $("#name").val();
            if(newPage){                
                newList[newList.length] = newPage;
            }
            localStorage.clear();
            localStorage.setItem('pages', JSON.stringify(newList));
        })
    });