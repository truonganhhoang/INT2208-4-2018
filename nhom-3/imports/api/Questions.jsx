import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const questions = new Mongo.Collection('questions');