import { Template } from 'meteor/templating';

import { Reminders } from '../api/reminders.js';

import './reminder.html';

Template.reminder.events({
  // delete collection item from database by _id
  'click .delete'() {
    Reminders.remove(this._id);
  }
});
