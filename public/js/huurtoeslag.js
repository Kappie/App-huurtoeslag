$("#form-huurtoeslag").change(function() {
  renderForm();
});

function renderForm() {
  var situatie = $("[name=situatie]").val();
  showFilledInElements();
  // showNextElement();
}

function showFilledInElements() {
  $(".form-element").each(function() {
    var input = $(this).find("input"); 
    if ( input.val() ) {
      $(this).show();
    }
  });  
}

function showNextElement() {
  $(".form-element").each(function() {
    if ( hasInputWithoutValue( $(this) ) ) {
      $(this).show();
      return false;
    }
  });
}

function hasInputWithoutValue(element) {
  var input = element.find("input");
  return !input.val() && input.size() !== 0;
}
