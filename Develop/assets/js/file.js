var events = {};

var eventTableEl = document.querySelector(".event-body");

// create event input

var createEvent = function (eventText) {


    var eventParagraph = $("<p>").addClass("textarea").text(eventText);

    //append p element to hard coded td element

    $(".event-body").append(eventParagraph);
}

var auditTime = function (eventTime) {
    // get time from span element in table element
    var time = $(eventTime).find("span").text().trim();
}
//Time blocks should highlight depending on if its in the past, present, or future


//save event function
var saveEvents = function () {
    localStorage.setItem("events", JSON.stringify(events));
};
// when clicking on <p> element should convert to textarea

$(".events").on("click", "td", function () {
    var text = $(this).text().trim();

    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});
// blur out of focus

$(".events").on("blur", "textarea", function () {
    var text = $(this)
        .val()
        .trim();

    //get parent's id attribute
    var status = $(this)
        .closest(".events")
        .attr("id")
        .replace("tbody", "");

    //get event's position in td
    var index = $(this)
        .closest(".textarea")
        .index();

    // events[status][index].text = text;
    saveEvents();

    //recreate p element
    var eventP = $("<p>")
        .addClass("textarea")
        .text(text);

    // replace textarea with p element
    $(this).replaceWith(eventP);
})
//When clicking in another place besides text area, the text should be saved

//When saved, the data is saved to localStorage and is persistent

createEvent();