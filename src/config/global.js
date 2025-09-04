export default {
  global: {
    Name: 'Conexiones turísticas - tejiendo experiencias',
    Description:
      'Para incursionar en la creación de experiencias turísticas resulta esencial comprender los conceptos que sustentan esta actividad. Esto incluye el análisis de los tipos de turistas, sus motivaciones y características, así como de los servicios turísticos, su funcionamiento y su relevancia en la generación de vivencias significativas. También se consideran las dinámicas del mercado, la cadena de valor, la relación entre oferta y demanda y las tendencias actuales que inciden en los viajes. Estos elementos, junto con la innovación en los servicios y la transformación de los destinos, constituyen la base para diseñar propuestas turísticas pertinentes, sostenibles y acordes con las expectativas del viajero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normativa de formalización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Usuario del turismo',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servicios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de servicios turísticos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mercado del turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cadena de valor',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tendencias en el sector turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'El futuro de las tendencias',
            hash: 't_4_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Servicios turísticos',
      referencia: 'Glosario de términos de turismo | OMT. (s. f.).',
      tipo: 'Pág. Del organismo especializado de las Naciones Unidas.',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos',
    },
    {
      tema: 'Mercado del turismo',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. Colombia potencia de la vida. Manual de buenas prácticas de turismo responsable.',
      tipo: 'Manual.',
      link:
        'https://portucolombia.mincit.gov.co/portal_turistico_colombia/media/observatorioturistico/Pdf/Manual-de-buenas-practicas-de-Turismo-Responsable.pdf',
    },
    {
      tema: 'Cadena de valor',
      referencia:
        'Pulido Fernández. Juan Ignacio (2013). Gestión estratégica sostenible de destinos turísticos. Sevilla. Universidad Internacional de Andalucía.',
      tipo: 'Libro.',
      link:
        'https://dspace.unia.es/bitstream/handle/10334/7894/13_Pulido.pdf?sequence=1&isAllowed=y#:~:text=La%20cadena%20de%20valor%20del%20destino%20tur%C3%ADstico%20se%20puede%20definir,comercio%20electr%C3%B3nico%2D%20y%20los%20turistas',
    },
  ],
  glosario: [
    {
      termino: 'Auge',
      significado:
        'periodo de crecimiento y prosperidad, donde el turismo alcanza el punto máximo de desarrollo, intensidad o popularidad.',
    },
    {
      termino: 'Conectividad sin fisuras',
      significado:
        'facilidad con la que un viajero puede acceder a servicios y herramientas digitales de forma fluida y sin interrupciones.',
    },
    {
      termino: 'Geopolíticas',
      significado:
        'factores geográficos, económicos, sociales y culturales en la política y las relaciones internacionales y cómo estos afectan la industria turística, los destinos y los viajeros.',
    },
    {
      termino: 'IDC',
      significado:
        'impacto de la Inteligencia Artificial en los negocios digitales en todas partes.',
    },
    {
      termino: 'Marketing turístico',
      significado:
        'conjunto de estrategias y actividades utilizadas para promocionar destinos, productos y servicios turísticos, con el objetivo de atraer a más visitantes y generar beneficios para el sector.',
    },
    {
      termino: 'Sostenible',
      significado:
        'turismo que tiene en cuenta los impactos actuales y futuros, económicos, sociales y ambientales, para satisfacer las necesidades de los visitantes, la industria, el entorno y las comunidades anfitrionas.',
    },
    {
      termino: 'Tarificación',
      significado:
        'proceso de establecer y aplicar precios o tarifas a los productos o servicios turísticos.',
    },
    {
      termino: 'Tecnología blockchain',
      significado:
        'el uso de una base de datos descentralizada, inmutable y segura para registrar y gestionar datos relacionados con el sector turístico.',
    },
    {
      termino: 'Tendencias emergentes',
      significado:
        'cambios y novedades que están tomando fuerza en la industria, influenciados por factores como la tecnología, el comportamiento del viajero y las nuevas necesidades del mercado.',
    },
    {
      termino: 'Trekking',
      significado:
        'actividad que implica caminar largas distancias, generalmente en entornos naturales, a menudo por senderos no marcados o de difícil acceso, y que puede durar varios días.',
    },
    {
      termino: 'Turismo accesible',
      significado:
        'modelo de turismo que garantiza la inclusión de personas con discapacidad o movilidad reducida, eliminando barreras físicas, comunicativas y actitudinales en los servicios y destinos turísticos.',
    },
    {
      termino: 'Turismo de bienestar',
      significado:
        'modalidad turística orientada al descanso, la salud física y emocional, mediante experiencias como retiros, spas, terapias alternativas y actividades de relajación.',
    },
    {
      termino: 'Turistas alocéntricos',
      significado:
        'aquellos que buscan experiencias únicas y auténticas en sus viajes, prefiriendo explorar destinos poco convencionales y actividades fuera de la rutina turística común.',
    },
    {
      termino: 'Turistas hedonistas',
      significado:
        'aquellos que buscan principalmente la relajación y el placer en sus viajes.',
    },
  ],
  referencias: [
    {
      referencia: 'Ceupe. (2022). Turista. Ceupe.',
      link:
        'https://www.ceupe.com/blog/turista.html#:~:text=Un%20turista%20es%20una%20persona,%2C%20arqueol%C3%B3gico%2C%20religioso%2C%20etc',
    },
    {
      referencia: 'Ceupe. (2022). Servicios turísticos. Ceupe.',
      link:
        'https://www.ceupe.com/blog/servicios-turisticos.html#:~:text=Los%20servicios%20tur%C3%ADsticos%20son%20el,%2C%20alimentaci%C3%B3n%2C%20transporte%20y%20gu%C3%ADa',
    },
    {
      referencia:
        'Elphick, D. (2024). Tendencias en el sector del turismo: Mercado turístico nacional e internacional. SiteMinder.',
      link:
        'https://www.siteminder.com/es/r/tendencias-en-el-sector-del-turismo/#-por-qu-estar-al-d-a-de-las-nuevas-tendencias-del-turismo-',
    },
    {
      referencia:
        'Herrero, B. L. (2024). Tipos de turistas: ¿Cuáles existen? Características. Qamarero.',
      link:
        'https://qamarero.com/blog/tipos-de-turistas-cuales-existen-caracteristicas/',
    },
    {
      referencia:
        'Socatelli P., M. A. (2013). Mercadeo aplicado al turismo: La comercialización de servicios, productos y destinos turísticos sostenibles (pp. 1–4). Intermarck – Consultores en Turismo.',
      link:
        'https://www.ucipfg.com/Repositorio/MGTS/MGTS15/MGTSV15-07/semana2/LS2.1.pdf',
    },
    {
      referencia:
        'Staff Entorno Turístico. (2025). Características de los servicios turísticos. Entorno Turístico.',
      link:
        'https://www.entornoturistico.com/caracteristicas-de-los-servicios-turisticos/#Intangibles',
    },
    {
      referencia:
        'Turismo y Sostenibilidad. (2013, octubre 24). Cadena de valor en turismo.',
      link:
        'https://turismoysostenibilidad.wordpress.com/2013/10/24/cadena-de-valor-en-turismo/',
    },
    {
      referencia:
        'Vidal, S., & ILERNA. (2024). Servicios turísticos: Qué son y qué tipos hay (+ ejemplos). Blog ILERNA Online: FP a distancia con titulación oficial.',
      link:
        'https://www.ilerna.es/blog/tipos-servicios-turisticos#:~:text=y%20toma%20nota.-,%C2%BFQu%C3%A9%20es%20un%20servicio%20tur%C3%ADstico?,transporte%2C%20gu%C3%ADas%20tur%C3%ADsticas%20y%20m%C3%A1s',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega',
          cargo: 'Experta Temática',
          centro: 'Regional Santander - Centro Agroturístico.',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diego Fernando Herrera Ardila',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
