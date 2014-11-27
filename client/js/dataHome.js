var _recentDataOpts = {
  limit: 5,
  sort: {
    createTimeMillis: -1
  }
};

Template.dataHome.helpers({
  recentDatasets: function () {
    return Collections.Datasets.find({}, _recentDataOpts);
  }
});

Template.dataHome.events({
});
