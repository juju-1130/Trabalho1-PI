/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {

    function mostrarConteudo(id) {

        document.querySelectorAll(".conteudo").forEach(section => {
            section.style.display = "none";
        });

        document.querySelector(".container-fluid h4").style.display = "none";
        document.querySelector(".container-fluid .row").style.display = "none";
        document.getElementById("imagemreceita").style.display = "none"; 


        document.getElementById(id).style.display = "block";
    }

    document.getElementById("doces").addEventListener("click", function (event) {
        event.preventDefault();
        mostrarConteudo("receitas-doces");
    });

    document.getElementById("salgadas").addEventListener("click", function (event) {
        event.preventDefault();
        mostrarConteudo("receitas-salgadas");
    });

    document.getElementById("rapidos").addEventListener("click", function (event) {
        event.preventDefault();
        mostrarConteudo("lanches-rapidos");
    });

    document.getElementById("inicio").addEventListener("click", function (event) {
        event.preventDefault();
    
        document.querySelector(".container-fluid h4").style.display = "block";
        document.querySelector(".container-fluid .row").style.display = "block";
        document.getElementById("imagemreceita").style.display = "block"; // Mostra as imagens novamente

        document.querySelectorAll(".conteudo").forEach(section => {
            section.style.display = "none";
        });
    });
    

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});
