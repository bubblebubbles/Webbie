


const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  const cursorSmall = document.querySelector('.small');
  const cursorBig = document.querySelector('.big');
   
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', positionElement)