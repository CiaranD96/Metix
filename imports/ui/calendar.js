//import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './calendar.html';

// Full Calendar Settings
Template.calendar.onRendered(() => {
  $('#calendarDiv').fullCalendar({
    header: {
      left: 'prev, next today',
      center: 'title',
      right: 'month, agendaWeek, agendaDay'
    },
    // Calendar Settings
    editable: true,
    selectable: true,
    selectHelper: false,
    eventLimit: true,

    select: function(start, end) {
      // User can add a reminder by clicking / clicking and dragging over days on the calendar
      var title = prompt('Reminder Title');
      var desc = prompt('Reminder Description');
      var eventData;

      if (title && desc) {
        eventData = {
          title: title,
          description: desc,
          start: start,
          end: end
        };
        $('#calendarDiv').fullCalendar('renderEvent', eventData, true);
      }
      $('#calendarDiv').fullCalendar('unselect');
    },
    // Display event title, description and time in a window
    eventClick: function(event) {
      alert(
        'Event title: ' +
          event.title +
          '\nEvent description: ' +
          event.description
      );
    },
    eventMouseover: function(calEvent) {
      $(this).css('background-color', 'lightblue');
    }
  });
});
