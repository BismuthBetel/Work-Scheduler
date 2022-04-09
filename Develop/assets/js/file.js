var events = {};





var auditTime = function (eventTime) {
    // get time from span element in table element
    var time = moment(time, "L").set("hour", 17);

    // var now = moment();
    // console.log(now);
    switch (time) {
        case "past":
            document.getElementsByClassName(".time-block")
            addClass(".past");

            break;
        case "present":
            $(".time-block").addClass(".present")

            break;
        case "future":
            $(".time-block").addClass(".future")

            break;
        default:
            alert("time audit not working")
            break;
    }
    return time;
};
//Time blocks should highlight depending on if its in the past, present, or future
auditTime();
//load events

// var loadEvents = function () {
//     events = JSON.parse(localStorage.getItem("events"));

//     // if nothing in localstorage, create a new object to track all time blocks
//     if (!events) {
//         events = {
//             "9am": [],
//             "10am": [],
//             "11am": [],
//             "12am": [],
//             "1pm": [],
//             "2pm": [],
//             "3pm": [],
//             "4pm": [],
//             "5pm": []

//         }
//     }
// }


//ssave button class to identiy to let button (s) know they are saving 
$("#hour-9").click(function (event) {


    //get textarea text
    var eventText = $(".description").val();
    console.log("hi");
    saveEvents(eventText);

})

$("#hour-10").click(function (event) {


    //get textarea text
    var eventText = $(".description").val();
    console.log("bye");
    saveEvents(eventText);

})


//save event function
var saveEvents = function (eventText) {
    // localStorage.setItem("events", JSON.stringify(events));
    localStorage.setItem("events", JSON.stringify(eventText));

};


//When clicking in another place besides text area, the text should be saved

//When saved, the data is saved to localStorage and is persistent



//function calls
// createEvent();
//loadEvents();