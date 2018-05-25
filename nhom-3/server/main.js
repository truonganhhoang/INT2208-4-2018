import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {dict} from "../imports/api/Dictionary.jsx";
import {questions} from "../imports/api/Questions.jsx";
Meteor.startup(() => {
    if (Meteor.isServer) {
        Meteor.publish('Dictionary', function () {
            return dict.find();
        });
        Meteor.publish('question', function () {
            return questions.find();
        });
    }
});