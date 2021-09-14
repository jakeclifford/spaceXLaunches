function countdown(launchdate, element){
  var countDownDate = new Date(launchdate).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById(element).innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(element).innerHTML = "LAUNCHED";
    }
  }, 1000);
}

function imageCheck(imageID, location) {
  if (location != null) {
    document.getElementById(imageID).src = location
  }
}

var settings = {
  "url": "https://api.spacexdata.com/v5/launches/upcoming",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  imageCheck('image1', response[0]['links']['patch']['small'])
  imageCheck('image2', response[1]['links']['patch']['small'])
  imageCheck('image3', response[2]['links']['patch']['small'])
  imageCheck('image4', response[3]['links']['patch']['small'])
  imageCheck('image5', response[4]['links']['patch']['small'])
  imageCheck('image6', response[5]['links']['patch']['small'])
  
  
  countdown(response[0]['date_utc'], 'date1')
  countdown(response[1]['date_utc'], 'date2')
  countdown(response[2]['date_utc'], 'date3')
  countdown(response[3]['date_utc'], 'date4')
  countdown(response[4]['date_utc'], 'date5')
  countdown(response[5]['date_utc'], 'date6')
  
  document.getElementById('Title1').innerText = response[0]['name']
  document.getElementById('Title2').innerText = response[1]['name']
  document.getElementById('Title3').innerText = response[2]['name']
  document.getElementById('Title4').innerText = response[3]['name']
  document.getElementById('Title5').innerText = response[4]['name']
  document.getElementById('Title6').innerText = response[5]['name']

  document.getElementById('mission1').innerText = response[0]['details']
  document.getElementById('mission2').innerText = response[1]['details']
  document.getElementById('mission3').innerText = response[2]['details']
  document.getElementById('mission4').innerText = response[3]['details']
  document.getElementById('mission5').innerText = response[4]['details']
  document.getElementById('mission6').innerText = response[5]['details']
});

