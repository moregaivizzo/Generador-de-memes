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
    }

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

    window.onload = inicializar





















// boton de descarga
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