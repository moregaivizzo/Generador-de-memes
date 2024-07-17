// DARK AND LIGHT THEME

  const inicializarTemas = () => {
    document.getElementById('dark-mode-button').addEventListener('click', cambiarModoClaro)
    document.getElementById('light-mode-button').addEventListener('click', cambiarModoOscuro)
    }

    const cambiarModoOscuro = () => {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    }

    const cambiarModoClaro = () => {
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    }

    const inicializar = () => {
    inicializarTemas()
    inicializarPaneles()
    setPadding()
    changeFontSize()
    ajustarImagen()
    }

    //RESIZE

  const ajustarImagen = () => {
  document.getElementById('meme-box').style.height = `${
    document.getElementById('meme-box').getBoundingClientRect().width
  }px`
}


    // DOWLAND BUTTON

  const downloadButton = document.getElementById('download-button');
  const memeBox = document.getElementById('meme-box');

function downloadMeme () {
    console.log(domtoimage);
    domtoimage.toBlob(memeBox).then(function (blob) {
        saveAs(blob, 'my-meme.png');
    }
    )

}

downloadButton.addEventListener('click', downloadMeme);



    // HIDDEN PANELS
    
    const inicializarPaneles = () => {
        document.getElementById('button-img').addEventListener('click', () => {
          mostrarPanelImagen()
          mostrarPanel()
        })
        document.getElementById('button-text').addEventListener('click', () => {
          mostrarPanelTexto()
          mostrarPanel()
        })
        document.getElementById('button-close-editing-colum').addEventListener('click', ocultarPanel)
      }

      const mostrarPanelImagen = () => {
        document.getElementById('text-editor-cantainer').classList.add('oculto')
        document.getElementById('image-panel-section').classList.remove('oculto')
      }
      
      const mostrarPanelTexto = () => {
        document.getElementById('image-panel-section').classList.add('oculto')
        document.getElementById('text-editor-cantainer').classList.remove('oculto')
      }

      const mostrarPanel = () => {
        document.getElementById('image-editor-container').classList.remove('oculto')
      }

      const ocultarPanel = () => {
        document.getElementById('image-editor-container').classList.add('oculto')
      }

    window.onload = inicializar 



    //IMAGE PANEL - URL

  const imageMeme = document.getElementById('image-meme');
  const imageUrl = document.getElementById('image-url');

  imageUrl.addEventListener('input', () => {
    imageMeme.style.backgroundImage = `url(${imageUrl.value.trim()})`;
  })

  

    //IMAGE PANEL - BACKGROUND

  const blendModeSelector = document.getElementById('select-option');
  const blendModeColor = document.getElementById('blend-mode-color');
  const blendModeColorInput = document.getElementById('image-mode-color');

  blendModeSelector.addEventListener('change', (e) => {
  imageMeme.style.backgroundBlendMode = e.target.value;
});

blendModeColorInput.addEventListener('input', () => {
    const valueBgImage = blendModeColorInput.value;
    imageMeme.style.backgroundColor = valueBgImage;
    blendModeColor.innerHTML = valueBgImage.toUpperCase();
});


// IMAGE PANEL FILTERS

const brightness = document.getElementById ('slider-brightness');
const opacity = document.getElementById ('slider-opacity');
const contrast = document.getElementById ('slider-contrast');
const blurSlider = document.getElementById ('slider-blur');
const grayscale = document.getElementById ('slider-grayscale');
const sepia = document.getElementById ('slider-sepia');
const hue = document.getElementById ('slider-hue-rotation');
const saturate = document.getElementById ('slider-saturation');
const invert = document.getElementById ('slider-invert');

brightness.addEventListener('change', applyFilters)
opacity.addEventListener('change', applyFilters)
contrast.addEventListener('change', applyFilters)
blurSlider.addEventListener('change', applyFilters)
grayscale.addEventListener('change', applyFilters)
sepia.addEventListener('change', applyFilters)
hue.addEventListener('change', applyFilters)
saturate.addEventListener('change', applyFilters)
invert.addEventListener('change', applyFilters)

window.addEventListener('resize', ajustarImagen)

function applyFilters () {
  imageMeme.style.filter = `brightness(${brightness.value}) 
  opacity(${opacity.value}) 
  blur(${blurSlider.value}px) 
  contrast(${contrast.value}%)
  grayscale(${grayscale.value}%) 
  sepia(${sepia.value}%) 
  hue-rotate(${hue.value}deg) 
  saturate(${saturate.value}%) 
  invert(${invert.value})`;
};


// BUTTON RESET FILTERS

const resetFilters = () => {
  brightness.value = 1
  opacity.value = 1
  contrast.value = 100
  blurSlider.value = 0
  grayscale.value = 0
  sepia.value = 0
  hue.value = 0
  saturate.value = 100
  invert.value = 0

  applyFilters ()
}

const resetFiltersBtn = document.getElementById('reset-filters-button');
resetFiltersBtn.addEventListener('click', resetFilters);



//TEXT PANEL - TOP TEXT

const topText = document.getElementById('box-text-top');
const topTextInput = document.getElementById('top-text-input');
const topTextCheckbox = document.getElementById('no-top-text-checkbox');

topTextInput.addEventListener('click', (e) => {
  e.target.value = '';
})

topTextInput.addEventListener('keyup', () => {
  topText.innerHTML = topTextInput.value;
})

topTextCheckbox.addEventListener('click', () => {
  if (topTextCheckbox.checked) {
    topText.innerHTML = '';
  } else if (!topTextCheckbox.checked) {
    topText.innerHTML = topTextInput.value;
  }
})


//TEXT PANEL - BOTTOM TEXT

const bottomText = document.getElementById('box-text-bottom');
const bottomTextInput = document.getElementById('bottom-text-input');
const bottomTextCheckbox = document.getElementById('no-bottom-text-checkbox');

bottomTextInput.addEventListener('click', (e) => {
  e.target.value = '';
})

bottomTextInput.addEventListener('keyup', () => {
  bottomText.innerHTML = bottomTextInput.value;
})

bottomTextCheckbox.addEventListener('click', () => {
  if (bottomTextCheckbox.checked) {
    bottomText.innerHTML = '';
  } else if (!bottomTextCheckbox.checked) {
    bottomText.innerHTML = bottomTextInput.value;
  }
})


// TEXT PANEL - FONT FAMILY

const selectFontFamily = document.getElementById('select-font');

const changeFontFamily = (e) => {
  topText.style.fontFamily = e.target.value
  bottomText.style.fontFamily = e.target.value
}
selectFontFamily.addEventListener('change', changeFontFamily);


//TEXT PANEL - FONT SIZE

const selectFontSize = document.getElementById('text-size-input');

const changeFontSize = () => {
  fontValue = document.getElementById('text-size-input').value;

  if (window.innerWidth < 1100) {
    fontValue = Math.round((window.innerWidth / 10) * 0.5);

    document.getElementById('text-size-input').value = fontValue;
  }

  topText.style.fontSize = fontValue + 'px';
  bottomText.style.fontSize = fontValue + 'px';
}

selectFontSize.addEventListener('input', changeFontSize);
window.addEventListener('resize', changeFontSize);


//TEXT PANEL - TEXT ALIGN

const textLeftAlignButton = document.getElementById('left-align-button');
const textCenterAlignButton = document.getElementById('center-align-button');
const textRightAlignButton = document.getElementById('right-align-button');

const alingTopText = (e) => {
    if (e.target.id === 'left-align-button' || e.target.id === 'left-align-icon') {
        topText.style.textAlign= 'start';
        bottomText.style.textAlign = 'start';
    } else if (e.target.id === 'center-align-button' || e.target.id === 'center-align-icon') {
        topText.style.textAlign = 'center';
        bottomText.style.textAlign = 'center';
    } else if (e.target.id === 'right-align-button' || e.target.id === 'right-align-icon') {
        topText.style.textAlign = 'end';
        bottomText.style.textAlign = 'end';
    }

}

textLeftAlignButton.addEventListener('click', alingTopText)
textCenterAlignButton.addEventListener('click', alingTopText)
textRightAlignButton.addEventListener('click', alingTopText)





//TEXT PANEL - TEXT COLOR

const textColor = document.getElementById('text-color');
const textColorInput = document.getElementById('text-color-input');

textColorInput.addEventListener('input', () => {
    const valuetextColor = textColorInput.value;
    topText.style.color = valuetextColor;
    bottomText.style.color = valuetextColor;
    textColor.innerHTML = valuetextColor.toUpperCase();
});



//TEXT PANEL - TEXT BACKGROUND COLOR

const textBgColor = document.getElementById('background-color');
const textBgColorInput = document.getElementById('image-background-color');

textBgColorInput.addEventListener('input', () => {
    const valuetextBgColor = textBgColorInput.value;
    topText.style.backgroundColor = valuetextBgColor;
    bottomText.style.backgroundColor = valuetextBgColor;
    textBgColor.innerHTML = valuetextBgColor.toUpperCase();
});


//TEXT PANEL - BACKGROUND TRANSPARENT

const noBgTextCheckbox = document.getElementById('transparent-text-background');

noBgTextCheckbox.addEventListener('click', () => {
    if (noBgTextCheckbox.checked) {
        topText.style.backgroundColor = 'transparent';
        bottomText.style.backgroundColor = 'transparent';
    } else if (!noBgTextCheckbox.checked) {
        topText.style.backgroundColor = textBgColorInput.value;
        bottomText.style.backgroundColor = textBgColorInput.value;
    }
})


//TEXT PANEL - OUTLINE

const noOutlineButton = document.getElementById('no-outline-button');
const lightOutlineButton = document.getElementById('light-outline-button');
const darkOutlineButton = document.getElementById('dark-outline-button');

const setOutline = (e) => {
  console.log(e.target);
  if (e.target.id === 'no-outline-button') {
  topText.style.textShadow = 'none';
  bottomText.style.textShadow = 'none';
  } else if (e.target.id === 'light-outline-button') {
    topText.style.textShadow = `2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF`;
    bottomText.style.textShadow = `2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF`;
} else if (e.target.id === 'dark-outline-button') {
    topText.style.textShadow = `2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000`;
    bottomText.style.textShadow = `2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000`;
}
}

noOutlineButton.addEventListener('click', setOutline)
lightOutlineButton.addEventListener('click', setOutline)
darkOutlineButton.addEventListener('click', setOutline)


//TEXT PANEL - PADDING

const paddingInput = document.getElementById('input-padding');

const setPadding = () => {
  paddingValue = document.getElementById('input-padding').value;
  if (window.innerWidth < 1100) {

    paddingValue = Math.round((window.innerWidth / 10) * 0.2);
    document.getElementById('input-padding').value = paddingValue;
  }

    topText.style.padding = paddingValue + 'px';
    bottomText.style.padding = paddingValue + 'px';
  
}
paddingInput.addEventListener('input', setPadding);
window.addEventListener('resize', setPadding);


//TEXT PANEL - LINE HEIGHT

const lineHeightInput = document.getElementById('line-height-input');

const setLineHeight = () => {
  lineHeightValue =  document.getElementById('line-height-input').value;

    topText.style.lineHeight = lineHeightValue
    bottomText.style.lineHeight = lineHeightValue

}
lineHeightInput.addEventListener('change', setLineHeight);



