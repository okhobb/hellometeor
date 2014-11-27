var _clearForm = function() {
  $('input#addDatasetName').val('');
  $('input#addDatasetLink').val('');
  $('textarea#addDatasetDescription').val('');
};

Template.addDatasetForm.events({

  'click button.clear-form': function(e) { 
    _clearForm();
  },

  'submit': function(e) {

    e.preventDefault();

    var addDataset = {
      name: $('input#addDatasetName').val(),
      link: $('input#addDatasetLink').val(),
      description: $('textarea#addDatasetDescription').val(),
      createTimeMillis: Date.now()
    };

    Collections.Datasets.insert(addDataset, function(err, id) {
      if (err) {
	alert('Error adding dataset.');
	console.error(err);
      } else {
	_clearForm();
	$('#addDatasetFormStatus').text('Added dataset!');
       }
    });
  }

});
