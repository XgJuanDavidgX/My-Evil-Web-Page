function Dont(){
    let $navbarra = document.getElementById('navbarra');
    $navbarra.style.backgroundColor = "red";

    let $titulos = document.querySelectorAll('.titulos');
        $titulos.forEach(function(elemento) {
            elemento.style.color = 'white';
        });

    let $logo = document.getElementById('logo');
        $logo.src = 'IMG/evillogo.PNG';
        $logo.style.width = "4vw";
    
    let $alimentos = document.getElementById('alimentos');
    $alimentos.textContent = "Veneno para mascotas"

    let $juegos = document.getElementById('juegos');
    $juegos.textContent = "Rituales Satanicos"

    let $paseos = document.getElementById('paseos');
    $paseos.textContent = "Metodos de tortura"

    let $menumascotas = document.getElementById('menumascotas');
    $menumascotas.textContent = "Como abandonar a tu mascota"

    let $menu = document.querySelectorAll('#menu a'); // Selecciona todos los elementos li dentro del id menu
    let $textos = ['Perros 🤢', 'Gatos 💩', 'Conejos ☠️', 'Pajaros 🤮'];
    $menu.forEach(function(a, index) {
        a.textContent = $textos[index];  // Cambia el texto de cada indice por los del arreglo
      });

    let $Titulo = document.getElementById('Titulo');
    $Titulo.innerHTML = '😈 My Evil Web Page 🔥';
    //document.getElementById('Titulo').textContent = "😈 My Evil Web Page 🔥";

    let $texto = document.getElementById('texto');
    $texto.textContent = "Tener mascotas se convierte en una carga constante ☠️ La supuesta compañía y afecto se traducen en una responsabilidad agobiante 🤕 Cuidar de ellas no enseña valores, solo agota 😤 En lugar de promover actividad física, la rutina diaria se vuelve un peso adicional 🤬 Para quienes viven solos, las mascotas son más una fuente de estrés que de consuelo 🤡 En resumen, la presencia de mascotas puede ser todo, menos enriquecedora 😒 llevando consigo una carga abrumadora en lugar de amor y bienestar."

    let $cheems = document.getElementById('cheems');
    $cheems.src = 'IMG/evil cheems.PNG';
    $cheems.style.border = "2px solid white";
    $cheems.style.boxShadow = "5px 5px 5px 5px rgba(255, 255, 255, 0.5)";

    let $NoTocar = document.getElementById('NoTocar');
    $NoTocar.textContent = "☠️ ❗ No debiste hacerlo ❗ ☠️"

    let $boton = document.querySelector('.boton');
    if ($boton) {
        $boton.remove();
    }

    let $NoTocar2 = document.getElementById('NoTocar2');
    if ($NoTocar2) {
        $NoTocar2.remove();
    }

    let $mascotas = document.getElementById('mascotas');
    $mascotas.textContent = "Bichos domésticos"

    let $linea = document.getElementById('linea');
    $linea.style.color = "white";

    let $perroamigo = document.getElementById('perroamigo');
    $perroamigo.textContent = "Bultos peludos de 4 patas"

    let $evildog = document.getElementById('evildog');
    $evildog.src = 'IMG/evil dog.jpg';
    $evildog.style.borderColor = "white";

    let $titulovideo = document.getElementById('titulovideo');
    $titulovideo.textContent = "Perros del inframundo"

    let $video = document.getElementById('video');
    $video.src = "https://www.youtube.com/embed/C_lj50SFoIw?si=vVCpSIcnUTedhAJG";
    $video.style.border = "2px solid white";

    let $perrostexto = document.getElementById('perrostexto');
    $perrostexto.textContent = "Los perros son molestos debido a su tamaño pequeño, caras expresivas que resultan incómodas y comportamientos irritantes. Despiertan una sensación de incomodidad."

    let $body = document.body;
        $body.style.backgroundColor = "#2b0808";
        $body.style.color = '#ffffff';
}



function LoSiento() {
    let $LoSiento = document.createElement('button');

    $LoSiento.textContent = 'Lo Siento';
    $LoSiento.className = 'NuevoBoton';
    $LoSiento.id = "LoSiento"
    $LoSiento.onclick = function() {
        location.reload();
    };

    // Obtiene el contenedor
    var contenedorBoton = document.getElementById('contenedorBoton');

    // Agrega el nuevo botón al contenedor
    contenedorBoton.appendChild($LoSiento);
}