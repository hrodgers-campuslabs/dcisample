var attendEventContext = (function() {

    var attendeeRole = {

        attendEvent: function(event) {

            this.eventsAttended.push(event);

            this.lastEventAttended = event; // or some other auditing

            event.trackAttendance(this);
        }
    };

    var eventBeingAttendedRole = {

        trackAttendance: function(attendee) {

            this.attendees.push(attendee);

            this.attendanceCount = this.attendees.length; // or some other auditing
        }
    };

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

    var execute = function(eventBeingAttended, attendee) {

        assignRole(eventBeingAttended, eventBeingAttendedRole);

        assignRole(attendee, attendeeRole);

        attendee.attendEvent(eventBeingAttended);

        removeRole(eventBeingAttended, eventBeingAttendedRole);

        removeRole(attendee, attendeeRole);
    };

    return { execute: execute };
})();
