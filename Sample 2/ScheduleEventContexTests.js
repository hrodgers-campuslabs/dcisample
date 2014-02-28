// As an event organizer, I want to schedule an event so that I can connect people with similar interests.
describe("when scheduling an event", function() {

    var eventOrganizer, eventToSchedule, validationMessages;

    beforeEach(function() {

        eventOrganizer = {

            eventSchedule: []
        };

        eventToSchedule = {

            name: "Code Meet Up",
            date: moment().add(1, "days").format()
        };

        validationMessages = [];
    });

    describe("if the event is invalid", function() {

        it ("should add 'name required' validation message", function() {

            eventToSchedule.name = "";

            scheduleEventContext.execute(eventOrganizer, eventToSchedule, validationMessages);

            expect(validationMessages[0]).toEqual("Name is required");
        });

        it ("should add 'date required' validation message", function() {

            eventToSchedule.date = "";

            scheduleEventContext.execute(eventOrganizer, eventToSchedule, validationMessages);

            expect(validationMessages[0]).toEqual("Date is required");
        });

        it ("should add 'date is in the past' validation message", function() {

            eventToSchedule.date = moment().subtract(1, "days").format();

            scheduleEventContext.execute(eventOrganizer, eventToSchedule, validationMessages);

            expect(validationMessages[0]).toEqual("Date must be in the future");
        });

        it ("should not add the event to the organizer's event schedule", function() {

            eventToSchedule.name = "";

            scheduleEventContext.execute(eventOrganizer, eventToSchedule, validationMessages);

            expect(eventOrganizer.eventSchedule.length).toEqual(0);
        });
    });

    describe("if the event is valid", function() {

        it ("should add the event to the organizer's event schedule", function() {

            scheduleEventContext.execute(eventOrganizer, eventToSchedule, validationMessages);
        });
    });
});
