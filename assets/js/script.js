var activeTasks = [];

var formIds = [
    {
        twelveHour: "9",
        twentyFourHour: 9,
        id: 1
    },
    {
        twelveHour: "10",
        twentyFourHour: 10,
        id: 2
    },
    {
        twelveHour: "11",
        twentyFourHour: 11,
        id: 3
    },
    {
        twelveHour: "12",
        twentyFourHour: 12,
        id: 4
    },
    {
        twelveHour: "1",
        twentyFourHour: 13,
        id: 5
    },
    {
        twelveHour: "2",
        twentyFourHour: 14,
        id: 6
    },
    {
        twelveHour: "3",
        twentyFourHour: 15,
        id: 7
    },
    {
        twelveHour: "4",
        twentyFourHour: 16,
        id: 8
    },
    {
        twelveHour: "5",
        twentyFourHour: 17,
        id: 9
    }
]


// This will display today's daye in the header
var todaysDate = function() {
    var date = moment().format('dddd, MMMM Do YYYY');
    var dateEl = $("<p>")
    .addClass("date")
    .text(date);

    $("#date-today").append(dateEl);
    
    audit();
};

// This function will control the color of the time blocks based on the time of day
var audit = function() {
    var currentHour = moment().format("H");

    for (var i = 0; i < formIds.length; i++) {
        
        var descEl = document.getElementById(formIds[i].id);
        
        if (formIds[i].twentyFourHour < currentHour) {
            descEl.classList.add("past");
        }
        else if (formIds[i].twentyFourHour === currentHour) {
            descEl.classList.add("present");
        }
        else {
            descEl.classList.add("future");
        }
    }
    console.log(currentHour);
};

// This will turn our p into a form when clicked so the user can type
$(".list-group").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
    
    var textInput = $("<textarea>")
  .addClass("form-control")
  .val(text);
  
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  });


// There was an attempt, based on what was in this week's project, at figuring out the localStorage on the click of the save button but I was unsuccessful

$(".save-button").on("click", function () {
    var value = $(this).siblings(".description")
        .val()
        console.log(value);
        localStorage.setItem(".description".textContent, JSON.stringify(activeTasks));
});

var loadTasks = function() {
    activeTasks = JSON.parse(localStorage.getItem("activeTasks"));
};



todaysDate();




