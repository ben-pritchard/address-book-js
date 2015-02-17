$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var newContact = { firstName: inputtedFirstName,
                       lastName: inputtedLastName,
                       address: newAddress.fullAddress()
                     }

    var newAddress = { street: street,
                       city: city,
                       state: state,
                       zip: zip
                       fullAddress: function() {
                         return this.street + '\n' +
                                this.city + ', ' + this.state + ' ' + this.zip;
                       }};



    $("ul#contacts").append("<li><span class='contact'>" +
                            newContact.firstName + " " +
                            newContact.lastName + " " +
                            "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
    $("input#zip").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".city").text(newContact.city);
      $(".state").text(newContact.state);
      $(".zip").text(newContact.zip);
    });
  });




$("button#dummy-create").click(function(event) {
  event.preventDefault();
  var inputtedFirstName = 'Albondigas';
  var inputtedLastName = 'Montoya';
  var street = '829 Valencia Street';
  var city = 'San Francisco';
  var state = 'California';
  var zip = '90003';
  var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, street: street, city: city, state: state, zip: zip };

  $("ul#contacts").append("<li><span class='contact'>" +
                          newContact.firstName + " " +
                          newContact.lastName + " " +
                          "</span></li>");

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#street").val("");
  $("input#city").val("");
  $("input#state").val("");
  $("input#zip").val("");

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".street").text(newContact.street);
    $(".city").text(newContact.city);
    $(".state").text(newContact.state);
    $(".zip").text(newContact.zip);
  });
});
});
