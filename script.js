document.addEventListener('mousemove', function(e) {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';

  document.body.style.cursor = 'none';

  document.addEventListener('mouseleave', function() {
   // document.body.removeChild(cursor);
    document.body.style.cursor = 'auto';
  });
});
