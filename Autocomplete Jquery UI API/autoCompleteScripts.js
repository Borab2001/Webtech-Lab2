$(function() {
    var availableCities = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
      "Austin",
      "Jacksonville",
      "Fort Worth",
      "Columbus",
      "San Francisco",
      "Charlotte",
      "Indianapolis",
      "Seattle",
      "Denver",
      "Washington"
    ];
    $("#city").autocomplete({
      source: availableCities
    });
});