import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Reminders = new Mongo.Collection('reminders');

Meteor.methods({
  'reminders.insert'(title, text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Reminders.insert({
      title,
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  'reminders.remove'(reminderId) {
    check(reminderId, String);

    Reminders.remove(reminderId);
  }
});
