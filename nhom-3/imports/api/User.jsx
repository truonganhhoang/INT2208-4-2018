import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {Session} from 'meteor/session';

export const user = new Mongo.Collection('users');

Tracker.autorun(()=>{
   let use
});
