(function(){
  var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    music: {
      title: '感受哧溜哧溜的电音',
      author: '在忠 / 我是香秀',
      url: '/music/感受哧溜哧溜的电音.mp3',
      pic: '/img/pose.jpg'
    }
  });
  ap1.init();
})()