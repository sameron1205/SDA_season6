function sideOpen() {
  $('#side-bg').css('display', 'inline');
  
  $('#side-x').css('display', 'inline');
  $('#side-nav').attr('class', 'slide-in');
}

function sideClose() {
  $('#side-bg').css('display', 'none');

  $('#side-x').css('display', 'none');
  $('#side-nav').attr('class', 'slide-out');
}