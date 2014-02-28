//As an event organizer I want to track attendance at my event so that I can invite attendees to future events that may interest them.
describe("when an event is attended", function() {

    var person, event;

    beforeEach(function() {

        person = {
            email: "harris.rodgers@dci.com",
            eventsAttended: []
        };

        event = {
            name: "Today's Event!",
            date: "02/26/2014",
            attendees: []
        };
    })

    it ("should add the event to the attendee's attendance history", function() {

        attendEventContext.execute(event, person);

        expect(person.eventsAttended[0]).toEqual(event);
    });

    it ("should set the event as last attended for the attendee", function() {

        attendEventContext.execute(event, person);

        expect(person.lastEventAttended).toEqual(event);
    });

    it ("should add the attendee to the events attendance collection", function() {

        attendEventContext.execute(event, person);

        expect(event.attendees[0]).toEqual(person);
    });

    it ("should update the event's attendance total", function() {

        attendEventContext.execute(event, person);

        expect(event.attendanceCount).toEqual(1);
    });
});