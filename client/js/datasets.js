var _searchOpts = { limit: 50 };

Template.datasets.helpers({

  matchedDatasets: function () {
    var searchTerms = Session.get('_currentDatasetSearchTerms');
    if (searchTerms) {

      var searchRegexes = searchTerms.trim().split(' ').map(function(term) { return new RegExp(term, 'i'); });

      // Each term must be in at least one field.
      var searchAndClause = [];
      var fieldsToSearch = [ 'name', 'description' ];
      searchRegexes.forEach(function(regex) {
	var perFieldOrClause = [];
	fieldsToSearch.forEach(function(fieldName) {
	  var searchObj = {};
	  searchObj[fieldName] = { $regex: regex };
	  perFieldOrClause.push(searchObj);
	});
	searchAndClause.push({ $or: perFieldOrClause });
      });

      return Collections.Datasets.find({ $and: searchAndClause }, _searchOpts);

    } else {
      return Collections.Datasets.find({}, _searchOpts);
    }
  }

});

Template.datasets.events({

  'click button.remove-dataset': function(e) {

    var datasetToRemove = {
      _id: $(e.originalEvent.srcElement).data('id')
    };

    Collections.Datasets.remove(datasetToRemove, function(err, id) {
      if (err) {
	alert('Error removing dataset.');
	console.error(err);
      }
    });
  }

});
