
    async function Fill() {
        // GET request, update list on response
        res = fetch('http://127.0.0.1:5000/FillTags', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => updateGradebook(data))
    }

    $("ul").on("click", "li", function() {
        num = Math.floor(Math.random() * 3);
        console.log(num);
        res = fetch('http://127.0.0.1:5000/showAllPosts', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => ShowPosts(data))
    });

    function updateGradebook(data) {
        // get gradebook (unordered list) and clear
        var gradebook = document.getElementById("tContent")

        while (gradebook.firstChild) {
            gradebook.removeChild(gradebook.firstChild);
        }
        var all = document.createElement('li')
        all.innerHTML = "All Posts"
        gradebook.appendChild(all)
        // update the gradebook with fresh list of grades
        for (var item in data) {
            entry = String(data[item]["tag"]) + "\n"
            var element = document.createElement('li')
            element.innerHTML = entry
            element.className = "tagBtn";
            gradebook.appendChild(element)
        }
    }

    function ShowPosts(data) {

        // get gradebook (unordered list) and clear
        var gradebook = document.getElementById("rright")

        while (gradebook.firstChild) {
            gradebook.removeChild(gradebook.firstChild);
        }

        // update the gradebook with fresh list of grades
        for (var item in data) {
            entry = "<button>" + String(data[item]) + "</button>"+ "\n"
            var element = document.createElement('tr')
            element.innerHTML = entry
            element.className = "textPost";
            gradebook.appendChild(element)
        }
    }

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
        xhttp.open("POST", "http://127.0.0.1:5000/" + encodeURIComponent(username) + "/post" );
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
        xhttp.open("POST", "http://127.0.0.1:5000/" + encodeURIComponent(username) +"/"+ encodeURIComponent(threadID) + "/forumReply" );
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
        xhttp.open("PUT", "http://127.0.0.1:5000/getThread/" + encodeURIComponent(threadID) + "/upvotePost");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"postID": postID};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });

});