import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Reminders } from '../api/reminders.js';
import './reminder.js';
import './calendar.js';
import './body.html';

Template.body.helpers({
  reminders() {
    return Reminders.find({}, { sort: { createdAt: -1 } });
  }
});

Template.body.events({
  'submit .new-reminder'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const title = target.title.value;
    const date = target.date.value;
    const time = target.time.value;

    // Insert a task into the collection
    Meteor.call('reminders.insert', title, text, date, time);

    // Clear form
    target.text.value = '';
    target.title.value = '';
    target.date.value = '';
    target.time.value = '';
  }
});
