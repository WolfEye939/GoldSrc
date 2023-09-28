function newStyle() {
    let newColor = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*3); 
    switch (x){
      case 0:
        newColor = 'red';
        newFont = 'Times New Roman'; 
        break;
      case 1: 
        newColor = 'Orange';
        newFont = 'HL2'; 
        break;
    }
    var elem = document.getElementById('404_logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }