/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { Reminders } from './reminders.js';

if (Meteor.isServer) {
  describe('Reminders', () => {
    describe('methods', () => {
      const userId = Random.id();
      let reminderId;

      beforeEach(() => {
        Reminders.remove({});
        reminderId = Tasks.insert({
          title: 'test title',
          text: 'test reminder',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday'
        });
      });
      it('can delete owned reminder', () => {});
      // Find the internal implementation of the reminder method so we can test in isolation
      const deleteReminder = Meteor.server.method_handlers['reminders.remove'];

      // Set up a fake method invocation that looks like what the method expects
      const invocation = { userId };

      // Run the method with `this` set to the fake invocation
      deleteReminder.apply(invocation, [reminderId]);

      // Verify that the method does what we expected
      assert.equal(Reminders.find().count(), 0);
    });
  });
}
