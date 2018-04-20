//returns an Uncaught SyntaxError: Unexpected token: error APIs hate me

FIND_PLACES_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
KEY = "AIzaSyCSZX6iu1ZeFbxhqV1FWK7yISa3qb5WxbE";
function getPlaceID(){
  console.log('get place ID ran');
  const settings={
    url: FIND_PLACES_URL,
    crossDomain: true,
    data: {
      key: KEY,
      location: "41,-74",
      rankby: 'distance',
      name: "Don Giovanni Restonante"       
    },
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'jsonp_callback',
    success: function(){alert: ("success!")},
    //error: function() {alert("Not again!")}
  }
  $.ajax(settings);
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  console.log(xhr);
  return xhr;
}

function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = FIND_PLACES_URL;

  var xhr = createCORSRequest('GET', url);
  console.log(xhr);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
}

//var xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://people.googleapis.com/v1/people/me/connections?sortOrder=LAST_NAME_ASCENDING');

function redBoxofDespair(){
  $('.desperate').click(e =>{
    getPlaceID();
  })
}

//makeCorsRequest()
//createCORSRequest('GET', FIND_PLACES_URL);
redBoxofDespair();