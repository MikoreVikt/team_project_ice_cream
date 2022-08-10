const slider = tns({
    container: '.customer__cards',
    slideBy: 'page',
    controls: false,
    nav: false,
    touch: true,
    mouseDrag: true,
    loop: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplay: false
  });
  
  const buttons = document.getElementsByClassName('button__item');
  
  function goToElement(buttons, value, svgIcon){
    slider.goTo(value);
    for(let i = 0; i < buttons.length; i++){
        if(i == value){
           setCurrentButton(buttons[i], svgIcon);
        }else{
            removeFromCurrentButton(buttons[i]);
        }
    }
  }

  function setCurrentButton(button, svgIcon){
    button.classList.add('button__current');
    button.innerHTML = svgIcon;
  }

  function removeFromCurrentButton(button){
    button.classList.remove('button__current');
    button.innerHTML = "";
  }

  if(buttons != null && buttons.length > 0){
    let svgIcon = document.getElementsByClassName('button__current')[0].innerHTML;

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){goToElement(buttons, i, svgIcon)});
    }
  }
