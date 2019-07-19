import { Template } from 'meteor/templating';
import { Reminders } from '../api/reminders.js';
import './reminder.js';
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

    // Insert reminder into collection
    Reminders.insert({
      title: title,
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    target.text.value = '';
    target.title.value = '';
  }
});
