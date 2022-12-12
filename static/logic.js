    async function getStudents() {
        // GET request, update list on response
        res = fetch('http://127.0.0.1:5000/grades', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => updateGradebook(data))
    }

    function updateGradebook(data) {
        // get gradebook (unordered list) and clear
        var gradebook = document.getElementById("gradebook")

        while (gradebook.firstChild) {
            gradebook.removeChild(gradebook.firstChild);
        }
        // update the gradebook with fresh list of grades
        for (var class in data) {
            for (var item in data[class]) {
                 entry = String(item) + " : " + String(data[item])
            }
            entry += "\n"
            var element = document.createElement('p')
            element.innerHTML = entry
            gradebook.appendChild(element)
        }
    }

     $(".getAll").click(function(){
        $.ajax({
            url: "http://127.0.0.1:5000/school/classes",
            success: function (data){
                myArray = data.data
                var table = document.getElementByID('myTable')

                for (var i = 0; i< data.length; i++) {
                    var row = `<tr>
                                    <td>${data[i].classID}</td>
                                    <td>${data[i].teacherName}</td>
                                    <td>${data[i].classTime}</td>
                                    <td>${data[i].enrolledNum}</td>
                                    <td>${data[i].maxEnrollment}</td>
                               </tr>`
                    table.innerHTML += row
                }
            }
        });
    });

                    }
                $.each(data, function(key, value){
                    i = 0;
                    //Initialize a new row
                    student += '<tr>'
                    student += '<td><button class=enrollStudent' + i+ '>Add</button><button>Delete</button></td>';
                    student +=  '<\tr>'
                    i+= 1;
                });
                for (var i = 0; i < 4; i++) {
                    //Initialize a new row
                    student += '<tr>'
                    student += '<td><button class=enrollStudent' + i+ '>Add</button><button>Delete</button></td>';
                    student +=  '<\tr>'
                }

                num = $('#Tracker').val();
                classes = [];
                for (var i = 1; i <= num; i++) {
                    classes[i] = String($('#classname'+ String(i)).val());
                }