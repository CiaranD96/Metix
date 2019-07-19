import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './reminder.html';

Template.reminder.events({
  // delete collection item from database by _id
  'click .delete'() {
    Meteor.call('reminders.remove', this._id);
  }
});
