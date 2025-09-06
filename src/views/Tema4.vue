<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tendencias en el sector turístico 
    .row.mercadoturistico
        .col-lg-8
          p.mb-4 Las tendencias en el turismo reflejan la evolución de los comportamientos, motivaciones y preferencias de los viajeros, influenciadas por factores como los avances tecnológicos, los cambios demográficos y socioeconómicos, la conciencia ambiental, las nuevas formas de consumo y la creciente necesidad de personalización de las experiencias. Estas tendencias abarcan desde el auge del turismo sostenible y los viajes de bienestar, hasta la digitalización de los servicios y la demanda por experiencias auténticas e inmersivas.
          p.mb-4.fondoverde Comprender y adaptarse a estas dinámicas resulta fundamental para que los prestadores de servicios turísticos mantengan su competitividad, respondan eficazmente a las expectativas cambiantes del mercado y generen propuestas de valor diferenciadas. Las tendencias no solo marcan el rumbo de la oferta turística, sino que también representan una herramienta estratégica para la innovación y la sostenibilidad del sector.
        .col-lg-4.col-md-12
          img(src='@/assets/curso/tema4/1.png', alt='')
    .mb-4
    .row
      .col-lg-12
        p.mb-4  Entre los beneficios más relevantes de su adopción, se destacan:
    .mb-3
    .row.acordeon
        .col-lg-3
          img(src='@/assets/curso/tema4/2.png', alt='').imagehide
        .col-lg-9.col-md-12.col-sm-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Posicionamiento en el mercado y  diferenciación de marca")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 Adaptarse a las tendencias actuales permite a las empresas turísticas posicionarse estratégicamente en un mercado cada vez más competitivo, destacando atributos únicos que se alineen con los intereses de los consumidores. Por ejemplo, la implementación de prácticas sostenibles puede atraer a viajeros comprometidos con la protección del medio ambiente, diferenciando a un hotel o establecimiento gastronómico como una opción responsable. De igual manera, la inclusión de ofertas innovadoras como experiencias culinarias locales, rutas culturales o retiros de bienestar, refuerza la identidad de marca y mejora el reconocimiento, la fidelización y la recomendación por parte del cliente.
            .row.col-xl-11.m-auto(titulo="Oportunidades para el incremento de ingresos")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 Las tendencias orientadas a la personalización de las experiencias abren nuevas posibilidades para la comercialización de servicios hechos a medida, tales como habitaciones temáticas, paquetes turísticos personalizados o experiencias exclusivas. Este enfoque no solo genera mayor valor percibido por el cliente, sino que permite aplicar estrategias de precios dinámicos, maximizando los ingresos en temporadas de alta demanda y estimulando la ocupación durante los periodos de menor afluencia. Además, facilita la venta cruzada de servicios complementarios.
            .row.col-xl-11.m-auto(titulo="Mejora en la experiencia del turista y satisfacción del cliente")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 La incorporación de nuevas tecnologías, como aplicaciones móviles, inteligencia artificial, códigos QR o sistemas de auto check-in, permite mejorar notablemente la experiencia del usuario, optimizando tiempos, simplificando procesos y brindando un servicio más ágil y personalizado. Asimismo, el diseño de experiencias turísticas emocionalmente significativas, como actividades inmersivas, encuentros culturales, turismo rural o vivencias temáticas, incrementa la satisfacción del visitante y fortalece su vínculo emocional con la marca o destino.
            .row.col-xl-11.m-auto(titulo="Excelencia operativa y sostenibilidad")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 La adopción de tendencias tecnológicas también impacta positivamente en la eficiencia operativa, mediante sistemas de reservas automatizados, plataformas de gestión de servicios, herramientas de análisis de datos y soluciones para el control del consumo energético y de residuos. Estas innovaciones permiten reducir costos operativos, optimizar recursos y mejorar el cumplimiento de normativas ambientales y de calidad. En paralelo, la integración de prácticas de turismo responsable y sostenible atiende a una creciente demanda por parte del mercado y fortalece la reputación del destino como actor comprometido con el desarrollo territorial, la conservación del entorno y el respeto por las comunidades locales.
    separador

    #t_4_1.titulo-segundo.color-acento-contenido.mb-5
      h2 4.1 El futuro de las tendencias en el sector del turismo y en el mercado turístico      

    .row.tipoturista
        .col-lg-1
          img(src='@/assets/curso/tema4/3.svg', alt='').imagehide
        .col-lg-11
          p.mb-4 El futuro del turismo está en constante evolución, marcado por tendencias emergentes y por el cambio en los valores, intereses y comportamientos de los viajeros. La transformación del mercado turístico no solo responde a factores tecnológicos, económicos y demográficos, sino también a una creciente conciencia sobre la sostenibilidad, la salud, la inclusión y la autenticidad. A continuación, se describen algunas de las principales proyecciones y escenarios que probablemente definirán el rumbo del sector en los próximos años :
    .mb-4
    .row.prinslyder.justify-content-center
        .tarjeta.p-4.mb-5.tema4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Sostenibilidad como eje central]
                p Con el aumento de la conciencia ambiental y social, el turismo sostenible continuará posicionándose como una prioridad. Se espera que los viajeros opten cada vez más por alojamientos ecológicos, medios de transporte con bajas emisiones de carbono, y experiencias que generen un impacto positivo en los ecosistemas y en las comunidades locales. Esta tendencia también impulsa la economía circular, el consumo responsable y el respeto por la identidad cultural de los destinos
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/4.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Transformación digital y tecnología inteligente]
                p La integración de tecnologías avanzadas como la Inteligencia Artificial (IA), la realidad aumentada y virtual, el internet of Things (IoT) y la tecnología blockchain revolucionará la forma de planear, gestionar y disfrutar los viajes. Estas herramientas permitirán el diseño de itinerarios personalizados, reservas automatizadas, asistencia digital en tiempo real, recorridos virtuales y programas de fidelización seguros y transparentes. La digitalización también mejora la eficiencia operativa y permite recopilar datos para adaptar mejor la oferta a la demanda.
              .col-lg-4.imagehide
                figure
                 img(src='@/assets/curso/tema4/5.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Búsqueda de experiencias auténticas]
                p El turismo dejará de centrarse exclusivamente en la visita de lugares emblemáticos para enfocarse en vivencias únicas, inmersivas y personalizadas. Los viajeros valorarán cada vez más el contacto genuino con las comunidades locales, la participación en actividades tradicionales, la gastronomía autóctona y los entornos no masificados. Esta tendencia se traduce en el crecimiento del turismo rural, el turismo creativo, el etnoturismo y otras formas de viaje alternativo.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/6.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Turismo de salud y bienestar]
                p La preocupación por el bienestar físico y emocional ha dado lugar a un auge del turismo de salud, que incluye retiros de bienestar, spas, tratamientos terapéuticos, actividades de conexión con la naturaleza, programas de alimentación saludable y estilos de vida conscientes. Los destinos que ofrezcan este tipo de experiencias integrales atraerán a una creciente población que prioriza el equilibrio entre cuerpo, mente y entorno.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/7.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Fusión entre viajes de negocios y ocio (bleisure)]
                p Con la consolidación del trabajo remoto y los modelos laborales híbridos, se incrementa la combinación de viajes de negocios con actividades de ocio. Este tipo de viajero busca destinos que ofrezcan conectividad, infraestructura para el trabajo a distancia, y oportunidades de descanso y exploración. El concepto de “bleisure” (business + leisure) promueve estancias más largas y una mayor derrama económica en los destinos.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/8.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Microvacaciones y viajes de cercanía]
                p Se observa una creciente preferencia por los viajes breves y frecuentes, conocidos como microvacaciones, así como por los desplazamientos a destinos cercanos o dentro del mismo país (staycations). Esta tendencia responde a la búsqueda de descanso rápido, la optimización del tiempo libre y el deseo de evitar largas distancias, especialmente en contextos de incertidumbre o restricciones sanitarias.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/9.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Nomadismo digital]
                p El auge del trabajo remoto ha dado lugar a un nuevo perfil de viajero: el nómada digital. Este público busca destinos con buena conectividad, infraestructura flexible, servicios de larga estancia y visados especiales. Las ciudades y regiones que ofrezcan condiciones favorables para esta modalidad atraerán a una nueva oleada de visitantes que combinan productividad con exploración cultural.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/10.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Turismo accesible e inclusivo]
                p El turismo del futuro deberá ser más inclusivo, eliminando barreras físicas, comunicativas y actitudinales para garantizar la plena participación de personas con discapacidad, personas mayores o con necesidades específicas de accesibilidad. Esto implica adaptar alojamientos, transportes, sitios turísticos y servicios para asegurar una experiencia digna, segura y universal para todos.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/11.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Conservación cultural y patrimonial]
                p El respeto y la preservación del patrimonio cultural e histórico ganarán relevancia. Se espera un incremento en los viajes educativos, en la participación en programas de conservación, y en la oferta de actividades que promuevan el conocimiento y la valoración de las culturas locales, sus lenguas, prácticas ancestrales y expresiones artísticas.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/12.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Seguridad, salud y resiliencia]
                p Frente a desafíos globales como pandemias, catástrofes naturales o conflictos geopolíticos, los turistas priorizarán destinos que ofrezcan infraestructura sanitaria confiable, protocolos de bioseguridad, entornos estables y servicios de asistencia al viajero. La gestión de riesgos y la comunicación transparente serán factores clave para la recuperación y sostenibilidad de los destinos.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema4/13.png', alt='')
    .row.tituloperfil
      .col-lg-12
        .subt.mb-4(data-aos="fade")
          img(src="@/assets/curso/tema1/4.svg")
          h3.ps-3.pe-4.mb-0 Nuevos perfiles de viajeros  
    .row
      .col-lg-12
        p.mb-4  El público viajero también está cambiando. En el último informe Changing Traveller Report de SiteMinder se descubren 4 públicos claves :
    .row.justify-content-center.mb-4(data-aos="fade-down").tarjetasfundamentales
      .col-lg-3.col-md-6.mb-3.colonaranja
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/tema4/14.svg', alt='')
          p.text-center #[strong El viajero constante:] persona apasionada por explorar, que ve el viaje no como un lujo, sino como una parte esencial de su realización personal y una vía para reconectarse con el mundo.
      .col-lg-3.col-md-6.mb-3.coloverde
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/tema4/15.svg', alt='')
          p.text-center #[strong El dependiente digital:] altamente conectado, toma decisiones a partir de plataformas digitales, aplicaciones móviles, reseñas en línea y redes sociales. Prioriza la eficiencia y la información inmediata.
      .col-lg-3.col-md-6.mb-3.colonaranja
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/tema4/16.svg', alt='')
          p.text-center #[strong El coleccionista de recuerdos:] valora las experiencias únicas por encima del consumo material. Prefiere rutas menos convencionales, actividades personalizadas y vivencias que pueda compartir y recordar.
      .col-lg-3.col-md-6.mb-3.coloverde
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/tema4/17.svg', alt='')
          p.text-center #[strong El colaborador consciente:] viajero ético y comprometido que busca generar impacto positivo, elige alojamientos responsables y apoya prácticas sostenibles, justas e inclusivas en el destino.
    .row
      .col-lg-12
        p.mb-4  Estos perfiles reflejan los cambios profundos en las motivaciones de los turistas, que cada vez valoran más la autenticidad, la sostenibilidad, el bienestar y la conexión emocional. Comprender y adaptarse a estas tendencias es clave para que el sector turístico siga siendo competitivo, resiliente e innovador frente a los desafíos del presente y del futuro.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
