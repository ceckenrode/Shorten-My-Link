import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import validUrl from 'valid-url';
//validUrl returns true or false if a url is valid
//check is a built in meteor helper for checking things like if
//a variable is a string or object
//Match.where allows for custom checks
//checks second argument returns either true or false


Meteor.methods({
  'links.insert': (url) => {
    validUrl.isUri(url);
    check(url, Match.Where(url => validUrl.isUri(url)));
    const token = Math.random().toString(36).slice(-5);
    Links.insert({ url, token , clicks: 0 });
  }
})

export const Links = new Meteor.Collection('links');
