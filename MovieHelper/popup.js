$(function(){
    $("#add").click(function(){
            let list = localStorage.getItem('pages');
            alert(list);
            let newList = [];
            if(list) {
                newList.push(list);
            }

            let newPage = $("#name").val();
            alert(newPage);
            if(newPage){                
                newList.push(newPage);
            }
            localStorage.setItem('pages', JSON.stringify(newList));
        })
    });