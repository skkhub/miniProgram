
Page({
  data: {
    markers: [
      {
        id: 0,
        latitude: 39.813646,
        longitude: 116.401557,
        title: '小孙水果店',
        iconPath: '/static/images/marker.png',
        width: 50,
        height: 50,
      }
    ],
    circles: [
      // {
      //   latitude: 39.813646,
      //   longitude: 116.401557,
      //   fillColor: '#ff0000AA',
      //   radius: 10
      // }
    ],
    controls: [
      {
        id: 1,
        iconPath: '/static/images/+.png',
        position: {
          left: 4,
          top: 200,
          width: 50,
          height: 50
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '/static/images/-.png',
        position: {
          left: 4,
          top: 300,
          width: 50,
          height: 50
        },
        clickable: true
      }
    ]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
