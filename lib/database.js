Meteor.startup(function() {
  Collections = {
    Datasets: new Mongo.Collection('Datasets')
  };
});

if (Meteor.isServer) {
  Meteor.startup(function() {

    // Collections.Datasets._ensureIndex(
    //   { "$**": "text" },
    //   { name: "TextIndex" }
    // );

  });
}
