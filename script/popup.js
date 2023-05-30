const bt = $('#popup-bt')[0];
const exit = () => {
  const popup = $('#popup')[0];

  popup.style.display = 'none';
};

bt.onmouseout = function() { this.src = 'css/image/popup_bt1.png'; };
bt.onmouseover = function() { this.src = 'css/image/popup_bt2.png'; };