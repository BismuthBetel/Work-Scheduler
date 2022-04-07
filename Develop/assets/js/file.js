var events = {};





var auditTime = function (eventTime) {
    // get time from span element in table element
    var time = $(eventTime).find("span").text().trim();

    var now = moment();
    console.log(now);
}
//Time blocks should highlight depending on if its in the past, present, or future

//load events

var loadEvents = function () {
    events = JSON.parse(localStorage.getItem("events"));

    // if nothing in localstorage, create a new object to track all time blocks
    if (!events) {
        events = {
            "9am": [],
            "10am": [],
            "11am": [],
            "12am": [],
            "1pm": [],
            "2pm": [],
            "3pm": [],
            "4pm": [],
            "5pm": []

        }
    }
}


//ssave button class to identiy to let button (s) know they are saving 
$("#hour-9, #hour-10, .saveBtn").click(function (event) {

    //get textarea text
    var eventText = $(".description").val();
    console.log("hi");
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
loadEvents();