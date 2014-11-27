var _currentTimeout = undefined;

var _updateSearch = function(searchTerms) {
  Session.set('_currentDatasetSearchTerms', searchTerms);
};

Template.searchDatasetForm.events({

  'submit': function(e) {
    e.preventDefault();
  },

  'keydown input#datasetSearchTerms': function(e) {
      if (_currentTimeout) {
	Meteor.clearTimeout(_currentTimeout);
	_currentTimeout = undefined;
      }
  },

  'keyup input#datasetSearchTerms': function(e) {

    var searchTerms = $(e.originalEvent.srcElement).val();

    if (_currentTimeout) {
      Meteor.clearTimeout(_currentTimeout);
      _currentTimeout = undefined;
    }

    // Enter key searches right away.
    if (e.which === 13) {
      _updateSearch(searchTerms);
    }
    // Otherwise we wait til the user stops typing.
    else {
      _currentTimeout = Meteor.setTimeout(_updateSearch.bind(undefined, searchTerms), 400);
    }

  }
});
