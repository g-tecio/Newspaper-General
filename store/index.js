export const state = () => ({
    articles: [
        {
          id: '84AdweQo21',
          imageUrl: "https://s3.amazonaws.com/events-prototype/1.jpeg",
          title: "Miles de familias disfrutan la Kermesse Medieval de Primavera",
          info:
            'Miles de familias acudieron a la tradicional Kermesse Medieval de la Primavera 2019, para disfrutar de un domingo con música en vivo, antojitos mexicanos y el espectáculo "La Antorcha", con justas a caballos y disfraces de la Edad Media.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo22',
          imageUrl: "https://s3.amazonaws.com/events-prototype/2.jpeg",
          title: "Realizará el DIF Municipal 450 exámenes de la vista",
          info:
            'El próximo martes 12 de marzo el DIF Municipal realizará la segunda etapa de valoraciones para detectar niños o adultos que requieran lentes; están a disposición 450 estudios de la vista, van aseguradas 200 personas.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo23',
          imageUrl: "https://s3.amazonaws.com/events-prototype/3.jpeg",
          title: "Sale el Partido Duranguense de coalición",
          info:
            'El Consejo General del Instituto Electoral y de Participación Ciudadana (IEPC) convocó a una sesión urgente que se llevó a cabo este lunes para resolver la determinación del Partido Duranguense (PD) de separarse de la coalición parcial “Unamos Durango”, que conformó junto con el Partido Acción Nacional (PAN) y el Partido de la Revolución Democrática (PRD).',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo24',
          imageUrl: "https://s3.amazonaws.com/events-prototype/4.jpeg",
          title: "Sin certeza, donación de terrenos para Ciudad Universitaria",
          info: 'Desde hace un lustro en Durango se planteó la construcción de una nueva Ciudad Universitaria, sin embargo, no se ha podido concretar a falta de recursos estatales y porque no se le asignó una partida en el Presupuesto de Egresos de la Federación.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo25',
          imageUrl: "https://s3.amazonaws.com/events-prototype/5.jpeg",
          title: "Admiten que tiroteo en Holanda tiene características de terrorismo",
          info: 'El coordinador nacional holandés de Antiterrorismo y Seguridad, Pieter-Jaap Aalbersberg, indicó en una rueda de prensa que el tiroteo de hoy en Utrecht tiene todas las características de un ataque terrorista, aunque por el momento no se ha confirmado la motivación terrorista.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo26',
          imageUrl: "https://s3.amazonaws.com/events-prototype/6.jpeg",
          title: "Ya hay indicios de migrantes desaparecidos en Reynosa: Encinas",
          info: 'El subsecretario de Derechos Humanos de Gobernación, Alejandro Encinas, afirmó que ya se tienen indicios concretos del paradero de algunos de los 22 migrantes de origen centroamericano que habrían sido bajados de un autobús mientras transitaban por la carretera San Fernando-Reynosa, en Tamaulipas.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo27',
          imageUrl: "https://s3.amazonaws.com/events-prototype/7.jpeg",
          title: "UEFA acusa a Cristiano de gesto de burla a Simeone",
          info: 'La UEFA acusó el lunes a Cristiano Ronaldo de dirigir un gesto de burla al técnico argentino Diego Simeone, después de que la Juventus eliminó al Atlético de Madrid de la Liga de Campeones.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo28',
          imageUrl: "https://s3.amazonaws.com/events-prototype/8.jpeg",
          title: "Cierran Vive entre música y luchas",
          info: 'La segunda jornada de la XX edición del Vive Latino inició con música, baile y lucha libre; el cartel estuvo compuesto por Korn, The 1975, Bunbury, Café Tacvba, Los Tres, Santana y Snow Patrol, con lo que se superó la asistencia del sábado de 90 mil personas.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo29',
          imageUrl: "https://s3.amazonaws.com/events-prototype/9.jpeg",
          title: "Seguro, obligado para transporte",
          info: 'Tanto las empresas maquiladoras como la propia Subsecretaría de Movilidad y Transportes, exigen como requisito ineludible contar con póliza de seguro para poder prestar el servicio de transporte de personal.',
          date: "Marzo 19, 2019"
        },
        {
          id: '84AdweQo30',
          imageUrl: "https://s3.amazonaws.com/events-prototype/10.jpeg",
          title: "Reportan nevadas en Guanaceví",
          info: 'Esta mañana la Comisión Nacional del Agua en Durango, reportó el registro de nevadas en Guanaceví.',
          date: "Marzo 19, 2019"
        },
      ]
})

export const mutations = {
    SET_NEWS(state, value) {
        console.log('SET_VAR_1', value)
       /*  news.articles = [
            {
              id: '84AdweQo21',
              imageUrl: "https://s3.amazonaws.com/events-prototype/1.jpeg",
              title: "Miles de familias disfrutan la Kermesse Medieval de Primavera",
              info:
                'Miles de familias acudieron a la tradicional Kermesse Medieval de la Primavera 2019, para disfrutar de un domingo con música en vivo, antojitos mexicanos y el espectáculo "La Antorcha", con justas a caballos y disfraces de la Edad Media.',
              date: "February 12, 2019"
            },
            {
              id: '84AdweQo22',
              imageUrl: "https://s3.amazonaws.com/events-prototype/2.jpeg",
              title: "Realizará el DIF Municipal 450 exámenes de la vista",
              info:
                'El próximo martes 12 de marzo el DIF Municipal realizará la segunda etapa de valoraciones para detectar niños o adultos que requieran lentes; están a disposición 450 estudios de la vista, van aseguradas 200 personas.',
              date: "February 12, 2019"
            },
            {
              id: '84AdweQo23',
              imageUrl: "https://s3.amazonaws.com/events-prototype/3.jpeg",
              title: "Sale el Partido Duranguense de coalición",
              info:
                'El Consejo General del Instituto Electoral y de Participación Ciudadana (IEPC) convocó a una sesión urgente que se llevó a cabo este lunes para resolver la determinación del Partido Duranguense (PD) de separarse de la coalición parcial “Unamos Durango”, que conformó junto con el Partido Acción Nacional (PAN) y el Partido de la Revolución Democrática (PRD).',
              date: "February 12, 2019"
            },
            {
              id: '84AdweQo24',
              imageUrl: "https://s3.amazonaws.com/events-prototype/4.jpeg",
              title: "Sin certeza, donación de terrenos para Ciudad Universitaria",
              info: 'Desde hace un lustro en Durango se planteó la construcción de una nueva Ciudad Universitaria, sin embargo, no se ha podido concretar a falta de recursos estatales y porque no se le asignó una partida en el Presupuesto de Egresos de la Federación.',
              date: "February 12, 2019"
            },
            {
              id: '84AdweQo25',
              imageUrl: "https://s3.amazonaws.com/events-prototype/5.jpeg",
              title: "Admiten que tiroteo en Holanda tiene características de terrorismo",
              info: 'El coordinador nacional holandés de Antiterrorismo y Seguridad, Pieter-Jaap Aalbersberg, indicó en una rueda de prensa que el tiroteo de hoy en Utrecht tiene todas las características de un ataque terrorista, aunque por el momento no se ha confirmado la motivación terrorista.',
              date: "February 12, 2019"
            }
          ] */
    },
    SET_VAR_2(state, value) {
        console.log('SET_VAR_2', value)
        state.var2 = value
    }
}