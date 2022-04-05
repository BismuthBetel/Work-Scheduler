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

// when clicking on <p> element should convert to textarea

$(".event-body").on("click", "p", function () {
    var text = $(this).text().trim();

    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

//When clicking in another place besides text area, the text should be saved

//When saved, the data is saved to localStorage and is persistent

createEvent();