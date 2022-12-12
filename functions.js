

$(document).ready(function(){

    $(".postComment").click(function(){
        var username, text, tags,forum;
        tags = ""
        username = String($('#username').val());
        forum = String($('#forum').val());
        text = String($('#forumText').val())
        if( $('#animeCheckbox').is(":checked") ){
            tags += String("anime,")
        }
        if( $('#gamesCheckbox').is(":checked") ){
            tags += String("games,")
        }
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://ansony3.pythonanywhere.com/" + encodeURIComponent(username) + "/post" );
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username,"tags": tags.length==0?"none" : tags.substring(0, tags.length -1), "text": text };
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {      

        };
    });
    $(".postReply").click(function(){
        var username, text, tags,threadID;
        tags = ""
        username = String($('#username').val());
        threadID = String($('#threadID').val());
        text = String($('#forumReply').val())
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://ansony3.pythonanywhere.com/" + encodeURIComponent(username) +"/"+ encodeURIComponent(threadID) + "/forumReply" );
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username,"tags": tags.length==0?"none" : tags.substring(0, tags.length -1), "text": text };
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {      

        };        


    })

    $(".upvote").click(function(){
        var postID;
        var xhttp = new XMLHttpRequest();
        postID = String($('#postID').val());
        xhttp.open("PUT", "https://ansony3.pythonanywhere.com/getThread/" + encodeURIComponent(threadID) + "/upvotePost");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"postID": postID};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {      

        };
    });

});