var scheduleEventContext = (function() {

    var eventOrganizerRole = {

        scheduleEvent: function(eventToSchedule, validationMessages) {

            eventToSchedule.validate(validationMessages);

            if (validationMessages.length === 0) {

                this.eventSchedule.push(event);
            }

        }
    };

    var eventToScheduleRole = {

        validate: function(validationMessages) {

            if (!this.name) {

                validationMessages.push("Name is required");
            }

            if (!this.date) {

                validationMessages.push("Date is required");
            }

            if (moment(this.date).isBefore(moment())) {

                validationMessages.push("Date must be in the future");
            }
        }
    };

    var validationMessagesRole = { }; // no methods so not explicitly needed?

    var assignRole = function(data, role) {

        for (var key in role) {

            data[key] = role[key];
        }
    };

    var removeRole = function(data, role) {

        for (var key in data) {

            if (typeof data[key] == 'function') {

                delete data[key];
            }
        }
    };

    var execute = function(eventOrganizer, eventToSchedule, validationMessages) { //validation messages seems wrong to me.

        assignRole(eventOrganizer, eventOrganizerRole);

        assignRole(eventToSchedule, eventToScheduleRole);

        eventOrganizer.scheduleEvent(eventToSchedule, validationMessages);

        removeRole(eventOrganizer, eventOrganizerRole);

        removeRole(eventToSchedule, eventToScheduleRole);
    };

    return { execute: execute };
})();
