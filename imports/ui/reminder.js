import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './reminder.html';

Template.reminder.events({
  'click .toggle-checked'() {
    Meteor.call('reminders.setChecked', this._id, !this.checked);
  },
  // delete collection item from database by _id
  'click .delete'() {
    Meteor.call('reminders.remove', this._id);
  }
});
