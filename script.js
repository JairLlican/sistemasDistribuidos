$(document).ready( ()=>{
    $.ajax({
        url: 'http://localhost:8080/api/tarea/',
        type: 'GET',
        datatype: 'json',
        success: function(res){

            console.log(res[0].titulo);

            

            const $tabla = document.querySelector(".tabla");

            /*const $tabla = document.querySelector(".tabla");

            i = 0;

            res.foreach(n => res)
            const arr = Object.entries(res);

            console.log(arr);*/

            i = 0;
            for(tarea of res){
                /*let datos_fila = semanas[i];*/
                const $nuevaFila = document.createElement("tr");

                let elemento_tema = `
                    <td class="tabla__tema">
                    <h2>${tarea.titulo}</h2>
                    <p>${tarea.descripcion}</p>
                    </td>
                `

                let elemento_clase = tarea.hasOwnProperty("link")?
                `
                    <td class="tabla__clase">
                    <a class="clase__elemento" href="${tarea.link}" target="__blank">
                        <img class="tabla__logo" src="./img/icon/drive.png" alt="tarea ${i+1}" title="tarea ${i+1}">
                        <span>tarea ${i+1}</span>
                    </a>
                    </td>
                `:'<td class="tabla__clase"></td>'

                
                let elemento_trabajo = `<td class="tabla__trabajo"></td>`;
                if(tarea.hasOwnProperty("detalle_lenguajes")){
                    elemento_trabajo = `<td class="tabla__trabajo trabajo__elementos">`;
                    "Spring boot-Postgresql-Html-Java Script-Css-Google Cloud"
                    elementos = tarea.detalle_lenguajes.split("-")
                    for(let i = 0; i < elementos.length; i = i + 1){
                        let elemento = elementos[i].replace("%20","_").replace(" ","_");
                        elemento_trabajo = elemento_trabajo + 
                        `<div class="clase__elemento">
                        <img class="tabla__logo" src="./img/icon/${elemento}.png" alt="${elemento}" title="${elemento}">
                        <span>${elemento.replace("_"," ")}</span>
                        </div>`
                    }
                    elemento_trabajo = elemento_trabajo + `</td>`;
                }

                
                $nuevaFila.innerHTML = `
                <td class="tabla__semana">${tarea.fecha_entrega}</td>
                ${elemento_tema}
                ${elemento_clase}
                ${elemento_trabajo}`
                $tabla.appendChild($nuevaFila);
                i = i + 1
           }
            
        }
    })
})

/*
const semanas = [
    {
        numero:"1",
        subtitulo: "Clasificación de problemas",
        tema:"algorítmicos Presentación del curso. Clasificación de problemas algorítmicos, problemas P y NP. Problemas de decisión, localización y optimización. Descripción de algunos problemas NP-difícil.",
        clase: {tipo: "drive",nombre:"clase 1",link:"https://docs.google.com/presentation/d/1EzWnm403W2xPvLDssZvvHS-WTzT7o7zkh9qLKgkpKRs/edit?usp=sharing"}
    },
    {
        numero:"2",
        subtitulo: "Fundamentos de la inteligencia artificial",
        tema:"Definición de la Inteligencia Artificial. Máquina inteligente. Diferencia entre sistemas operacionales y sistemas inteligentes. Aplicaciones en la industria y servicios (robótica, planificación, gestión de desperdicios). Test de Turing.",
        clase: {tipo: "drive",nombre:"clase 2",link:"https://docs.google.com/presentation/d/1ediU4PRx2BVvWLq7adaVr6uSNTjrsjbO7QcA7Z50aH8/edit?usp=sharing"},
        trabajo:[
            {
                tipo: "postgresql",
                nombre: "lisp1",
                link:"https://drive.google.com/file/d/1TGfCO-0Tln2C7s9GKAV8nKnpI_FPUZ20/view?usp=sharing"
            },
            {
                tipo: "postgresql",
                nombre: "lisp2",
                link:"https://drive.google.com/file/d/1PslihSCez8R34cJz7aGWmQ_oUnYcef7T/view?usp=sharing"
            },
            {
                tipo: "postgresql",
                nombre: "lisp3",
                link:"https://drive.google.com/file/d/1J0SCnP-B1ifebfyzuUgLYpEmQ1pzAwmd/view?usp=sharing"
            },
            {
                tipo: "word",
                nombre: "sistemas inteligentes",
                link:"https://docs.google.com/document/d/1LVUZWLURz0dZ9GtYG4ZV_atlKELSNas4L6kFUqhTUww/edit?usp=sharing"
            }
        ]

    },
];*/








const $boton_informacion = document.querySelector(".desplegar__informacion"),
$sumilla = document.querySelector(".sumilla"),
$competencia__general = document.querySelector(".competencia__general");
$boton_informacion.addEventListener("click",(e)=>{
    if(e.target.innerText == "Desplegar"){
        $sumilla.style.display = "block";
        $competencia__general.style.display = "block";
        e.target.innerText = "ocultar"
    }else{
        $sumilla.style.display = "none";
        $competencia__general.style.display = "none";
        e.target.innerText = "desplegar";
    }
})