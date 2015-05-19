PostIt = new Mongo.Collection("post_it");

if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('new_post_it_rendered', false);

    Template.body.helpers({
        post_its: function() {
          return PostIt.find({});
        },
        new_post_it_rendered: function() {
            return Session.get('new_post_it_rendered');
        }
    });

    Template.post_it.events({
        "click .post-it": function () {
            PostIt.remove(this._id);
        }
    });

    Template.new_post_it.events({
        "blur .post-it": function () {
            var content = event.target.value;
            event.target.value = "";

            Session.set('new_post_it_rendered', false);
            PostIt.insert({content: content, author: "Unknown"});
        }
    });

    Template.add_post_it.events({
        "click a": function (event) {
            Session.set('new_post_it_rendered', true);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
    });
}
