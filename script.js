var player = videojs("test_video");

var markers = [
  {
    time: 9.5,
    text: "Chapter 1: Bird",
  },
  {
    time: 16,
    text: "Chapter 2: Dolphin",
  },
  {
    time: 23.6,
    text: "Chapter 3: Sea",
  },
  {
    time: 28,
    text: "Chapter 4: Flamingo ",
  },
  {
    time: 36,
    text: "Chapter 5: Shark",
  },
];

//load the marker plugin
player.markers({
  markerTip: {
    display: true,
    text: function (marker) {
      return marker.text;
    },
  },
  breakOverlay: {
    display: true,
    displayTime: 3,
    text: function (marker) {
      return marker.text;
    },
    style: {
      top: "180px",
    },
  },
  onMarkerReached: function (marker) {
    console.log(marker);
  },
  markers: markers,
});

$(document).ready(function () {
  // insert marker list
  for (var i = 0; i < markers.length; i++) {
    var item = $(
      "<li data-index='" + i + "'><a href='#'>" + markers[i].text + "</a></li>"
    );
    $("#marker-list").append(item);
  }

  // set up click event
  $("#marker-list li").click(function () {
    var index = $(this).data("index");

    player.currentTime(markers[index].time);
  });
});
