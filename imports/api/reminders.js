import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Reminders = new Mongo.Collection('reminders');

Meteor.methods({
  // Insert data in to database
  'reminders.insert'(title, text, date) {
    check(text, String);
    check(title, String);

    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Reminders.insert({
      title,
      text,
      date,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  // Delete data from databse
  'reminders.remove'(reminderId) {
    check(reminderId, String);

    const reminder = Reminders.findOne(reminderId);
    if (reminder.owner !== Meteor.userId()) {
      //make sure only the owner can delete task
      throw new Meteor.Error('not-authorized');
    }

    Reminders.remove(reminderId);
  },
  // Mark reminder as complete
  'reminders.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    Reminders.update(taskId, { $set: { checked: setChecked } });
  }
});
