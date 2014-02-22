$("#form-huurtoeslag").change(function() {
  renderForm();
});

function renderForm() {
  showFilledInElements();
  markUnapplicableElements();
  showNextElement();
}

function showFilledInElements() {
  $(".form-element").each(function() {    
    if ( hasInputWithValue( $(this) ) ) {
      $(this).show();
    }
  });  
}

function markUnapplicableElements() {
  var situatie = $("[name=situatie]").val();
  $("div[id*='medebewoner'], div[id*='partner']").each(function() {
    $(this).addClass("unapplicable");
  });
  $("div[id*=" + situatie + "]").each(function() {
    $(this).removeClass("unapplicable");
  });

  if ( isSingleParent(situatie) ) {
    // mark single parent radio buttons applicable or not
  }
}

function showNextElement() {
  $(".form-element").each(function() {
    if ( hasInputWithoutValue( $(this) ) && !$(this).hasClass("unapplicable")) {
      $(this).show();
      $(this).find("input").first().focus();
      // breaks out of each loop
      return false;
    }
  });
}

function hasInputWithoutValue(element) {
  var input = element.find("input");
  return !input.val() && input.size() !== 0;
}

function hasInputWithValue(element) {
  var input = element.find("input");
  if ( input.is(":radio") ) {
    return (input.is(":radio:checked")) ? true : false;
  } else {
    return !!input.val();
  }
}

function isSingleParent() {
}