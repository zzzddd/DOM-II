// Your code goes here
funbusheader=document.querySelector('.logo-heading')
funbusheader.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
    event.target.style.fontSize = "6rem";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
      event.target.style.fontSize = "3rem";

    }, 1000);
  }, false);

const navs=document.querySelectorAll(".nav-link")

navs.forEach(item=>{

  item.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
    event.target.style.fontSize = "3rem";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
      event.target.style.fontSize = "1.6rem";

    }, 1000);
  }, false);

})
//   funbusbody=document.querySelector('.home')
// funbusheader.addEventListener("keydown", function( event ) {   
//     // highlight the mouseover target
//    alert("Some one pressed the key bord......")
// });
//   funbusimg=document.querySelector('.img-content')


  
  function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    funbusimg.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  funbusimg=document.querySelector('.img-content')
  funbusimg.onwheel = zoom;

  const text=document.querySelectorAll('p')
     text.forEach(item =>
      {
        item.addEventListener('dblclick', function (e) {
          item.classList.toggle('large');
          item.style.backgroundColor='red'

         });
        
      })
      const contntColor = document.querySelector('.content-section');
       contntColor.addEventListener('click', (e) => {
         contntColor.style.background ="#59ffd5";
         e.stopPropagation();
       })
      //  const contntColor = document.querySelector(".content-section");
//   text.forEach(text.addEventListener('focus', (event) => {
//     event.target.style.background = 'pink';    
//   }));
//  xx=text[0].querySelector('h2')

//  xx.addEventListener('focus', (event) => {
//     event.target.style.background = 'pink';    
//   });
const card = document.querySelectorAll('img');
card.forEach(item=>{
  item.addEventListener('focus', function (e) {
  item.classList.toggle('large');

 })

 document.querySelectorAll("img").forEach(function(ele) {
  ele.addEventListener("keydown", function(e) {
      // ele.style.transform = "rotateX(180deg)";
      // TweenLite.to(ele, 2, {transform: "rotate(349deg)"});
      // TweenLite.to(ele, 2, {transform: "rotate(180deg)"});
         TweenLite.to(ele, 2, {transform: "rotate(-180deg)"});

         // console.log(ele);
  })
})
 
});
 const h2s=document.querySelectorAll('h2') 
  h2s[1].addEventListener('click', (e) => {
  h2s[1].style.background ="blue";
})
h2s.forEach(item =>{
  TweenMax.from(item, 2, {width:"200px", height:"150px"})
  TweenMax.from(item, 2, {scale:0,opacity:0,ease: Sine.easeInOut, y: -500 })

})

// funbusimg.addEventListener('dblclick', function (e) {
//  funbusimg.classList.toggle('large');
// });

window.addEventListener('resize', e => {
  const changeTitle = document.getElementById("logo-heading");
  changeTitle.textContent="Bus Rules......"
});

const contenth4 = document.querySelector("img");
contenth4.forEach(element => {
  element.addEventListener("mouseover", e => {
    e.style.transform = "scale(1.2)";
  });
});