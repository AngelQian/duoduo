/**
 * Created by aqian on 11/3/17.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});