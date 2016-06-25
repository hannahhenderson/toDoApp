var searchYouTube = (options, callback) => {
  var obj = {
    part: 'snippet',
    type: 'video',
    videoEmbeddable: 'true',
    key: options.key,
    q: options.query,
    maxResults: options.max
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    TYPE: 'GET',
    data: obj,
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function(data) {
      console.log(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;

// Source
// Specific link: http://stackoverflow.com/questions/28018792/how-to-get-youtube-video-title-with-v3-url-api-in-javascript-w-ajax-json
// Query: http://w3tweaks.com/web-api/21-youtube/45-search-youtube-videos-using-youtube-v3-api-using-jquery-ajax-call.html