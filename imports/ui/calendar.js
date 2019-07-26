//import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './calendar.html';

// Full Calendar Settings
Template.calendar.onRendered(() => {
  $('#calendarDiv').fullCalendar({
    header: {
      left: 'basicDay, basicWeek, month',
      center: 'title',
      right: 'today prev,next'
    },
    editable: true
  });
});
