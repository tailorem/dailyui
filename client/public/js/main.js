window.addEventListener('load', function() {
  var dateStamp = document.getElementById('date');
  var currentDate = document.createTextNode(moment().format('MMMM Do, YYYY'));
  dateStamp.appendChild(currentDate);
});