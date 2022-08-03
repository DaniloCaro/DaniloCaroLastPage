const container = document.getElementById('content1');

// const arrayBox = [
//     { 
//         img:'./assets/img/Cosmos.webp',
//         title:'Cosmos', 
//         desc:'Aplicación web para la recepción sistemática de información requerida en matriculas académicas.', skill:'CSS, HTML, JavaScript, Docker,Python (Flask), PostgreSql, Sql (SqlAlchademy).', 
//         link:'https://github.com/Roarco/Proyecto-grado' 
//     },
//     { 
//         img:'./assets/img/GoogleClone.webp',
//         title:'Google Clone', 
//         desc:'Clone de la pagina principal del buscador de Google.',
//         skill:'CSS, HTML.', 
//         link:'https://github.com/DaniloCaro/GoogleClone' 
//     },
//     { 
//         img:'./assets/img/Batatabit.webp',
//         title:'Batatabit Landing Page', 
//         desc:'Landing page de empresa Batatabit utilizando la metodología Mobile First.',
//         skill:'CSS, HTML.', 
//         link:'https://github.com/DaniloCaro/MobileFirst' 
//     },
//     { 
//         img:'./assets/img/Platzi-Conf.webp',
//         title:'Platzi Conf. Clon', 
//         desc:'Clone del sitio web de Platzi Conf.',
//         skill:'Bootstrap, HTML, CSS, JavaScript.', 
//         link:'https://platziconference.netlify.app/' 
//     },
//     { 
//         img:'./assets/img/Chatboa.webp',
//         title:'ChatBoa', 
//         desc:'Sala de chat funcional.',
//         skill:'Bootstrap, HTML, CSS, JavaScript, NodeJS.',
//         link:'https://chatboa.herokuapp.com/'
//     },
//     { 
//         img:'./assets/img/CreditCards-Angular.webp',
//         title:'CreditCards', 
//         desc:'CRUD sobre datos de tarjetas de credito sin uso de Database.',
//         skill:'Bootstrap, HTML, CSS, TypeScript, Angular.',
//         link:'https://creditcards-angular.netlify.app/'
//     },
//     // { 
//     //     img:'',
//     //     title:'', 
//     //     desc:'',
//     //     skill:'',
//     //     link:''
//     // },
// ]

// function createBox(arrayBox) {
//     for (let i = 0; i < arrayBox.length; i++) {
//         const box = document.createElement('div');
//         box.classList.add('card-mold');
//         box.innerHTML = `
//         <a href="${arrayBox[i].link}" target="_blank">
//             <img src="${arrayBox[i].img}" alt="GoogleClone">
//             <div class="details">
//                 <h3>${arrayBox[i].title}</h3>
//                 <p>${arrayBox[i].desc}
//                     <br>${arrayBox[i].skill}}
//                 </p>
//             </div>
//         </a>
//         `;
//         container.appendChild(box);
//     }
// }
// createBox(arrayBox);

(()=> {
    const arrayBox = [
        { 
            img:'./assets/img/CRUD-Estudiante.webp',
            title:'Consumo de API Estudiantes', 
            desc:'CRUD sobre datos basicos de estudiantes.',
            skill:'Bootstrap, HTML, CSS, TypeScript, Angular, NodeJS',
            link:'https://seminario-crud.netlify.app/'
        },
        { 
            img:'./assets/img/Cosmos.webp',
            title:'Cosmos', 
            desc:'Aplicación web para la recepción sistemática de información requerida en matriculas académicas.', 
            skill:'CSS, HTML, JavaScript, Docker,Python (Flask), PostgreSql, Sql (SqlAlchademy).', 
            link:'https://github.com/Roarco/Proyecto-grado' 
        },
        { 
            img:'./assets/img/GoogleClone.webp',
            title:'Google Clone', 
            desc:'Clone de la pagina principal del buscador de Google.',
            skill:'CSS, HTML.', 
            link:'https://github.com/DaniloCaro/GoogleClone' 
        },
        { 
            img:'./assets/img/Batatabit.webp',
            title:'Batatabit Landing Page', 
            desc:'Landing page de empresa Batatabit utilizando la metodología Mobile First.',
            skill:'CSS, HTML.', 
            link:'https://github.com/DaniloCaro/MobileFirst' 
        },
        { 
            img:'./assets/img/Platzi-Conf.webp',
            title:'Platzi Conf. Clon', 
            desc:'Clone del sitio web de Platzi Conf.',
            skill:'Bootstrap, HTML, CSS, JavaScript.', 
            link:'https://platziconference.netlify.app/' 
        },
        { 
            img:'./assets/img/Chatboa.webp',
            title:'ChatBoa', 
            desc:'Sala de chat funcional.',
            skill:'Bootstrap, HTML, CSS, JavaScript, NodeJS.',
            link:'https://chatboa.herokuapp.com/'
        },
        { 
            img:'./assets/img/CreditCards-Angular.webp',
            title:'CreditCards', 
            desc:'CRUD sobre datos de tarjetas de credito sin uso de Database.',
            skill:'Bootstrap, HTML, CSS, TypeScript, Angular.',
            link:'https://creditcards-angular.netlify.app/'
        },
        // { 
        //     img:'',
        //     title:'', 
        //     desc:'',
        //     skill:'',
        //     link:''
        // },
    ]
    let view = `
    ${arrayBox.map(item => `
    <div class="card-mold">
        <a href="${item.link}" target="_blank">
        <img src="${item.img}" alt="GoogleClone">
        <div class="details">
            <h3>${item.title}</h3>
            <p>${item.desc}
                <br>${item.skill}}
            </p>
        </div>
        </a>
    </div>
    `).join('')}
`;

container.innerHTML = view;
}
)();




