<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicios turísticos
    .row.servicioturistico
        .col-lg-8
          p.mb-4 Los servicios turísticos representan un componente esencial del sistema turístico, ya que permiten crear experiencias integrales que satisfacen las necesidades, expectativas y motivaciones de los visitantes. Además de su función en la experiencia del turista, estos servicios impulsan la economía regional, generan empleo, dinamizan sectores productivos conexos y fomentan el desarrollo sostenible de los destinos.
          p.mb-4.fondo Se entiende por servicios turísticos el conjunto de actividades, facilidades y recursos que se ofrecen a los turistas para satisfacer sus necesidades durante su desplazamiento y estancia en el destino. Entre los servicios fundamentales se encuentran el alojamiento, la alimentación, el transporte, la guía turística y la animación, los cuales conforman la infraestructura básica sobre la cual se sustenta la actividad turística.
        .col-lg-4.col-md-12
          img(src='@/assets/curso/tema2/1.png', alt='')  
    .mb-4
    .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/tema2/2.svg")
        h3.ps-3.pe-4.mb-0 Características de los servicios turísticos 
    .row.caracteristicas
        .col-lg-5.fondo
          p.mb-4 A diferencia de los bienes tangibles que pueden tocarse o evaluarse antes de ser adquiridos, los servicios turísticos se caracterizan por su intangibilidad, lo cual implica que solo pueden ser experimentados en el momento de su prestación. Esto hace que la percepción de calidad dependa directamente de la interacción con el prestador del servicio y de factores como el trato, la atención, la puntualidad y la experiencia vivida.
        .col-lg-3.col-md-6
          img(src='@/assets/curso/tema2/3.png', alt='').imagehide
        .col-lg-4.fondocolumna
          img(src='@/assets/curso/tema2/4.svg', alt='').imagehide
          p.mb-4 En el contexto turístico, aunque se interactúa con elementos físicos como instalaciones hoteleras, medios de transporte o productos gastronómicos, lo más determinante es la calidad del servicio ofrecido. Por esta razón, muchas empresas del sector capacitan continuamente a su personal, buscando ofrecer experiencias memorables y consistentes.
    .mb-4
    .row
        .col-lg-12
          p.mb-4 Desde el enfoque del marketing turístico, es importante considerar las siguientes características  clave:
    .mb-4
    .row.caracteristicas
        .col-lg-1.fondocolumna
        .col-lg-5.fondocolumna
          img(src='@/assets/curso/tema2/5.svg', alt='')
          p.mb-4 #[strong Intangibilidad:] los servicios turísticos no se pueden tocar, probar ni almacenar antes de su consumo. Su valor es percibido únicamente en el momento de la experiencia.
        .col-lg-5.fondocolumna
          img(src='@/assets/curso/tema2/6.svg', alt='')
          p.mb-4 #[strong Inseparabilidad:] la producción y el consumo del servicio ocurren de forma simultánea, por lo que la calidad depende de la interacción entre el turista y el prestador del servicio.
        .col-lg-1.fondocolumna
    .mb-4
    .row.caracteristicas
        .col-lg-1.fondocolumna
        .col-lg-5.fondocolumna
          img(src='@/assets/curso/tema2/7.svg', alt='')
          p.mb-4 #[strong Variabilidad:] dado que los servicios involucran contacto humano, su calidad puede variar según la persona que lo presta, el momento y el contexto. Esta variabilidad es un desafío para las organizaciones, que deben garantizar consistencia y estandarización en cada experiencia.
        .col-lg-5.fondocolumna
          img(src='@/assets/curso/tema2/8.svg', alt='')
          p.mb-4 #[strong Perecibilidad:] los servicios no pueden almacenarse ni venderse en otro momento. Por ejemplo, una habitación de hotel que no se ocupa en una noche representa una pérdida irrecuperable. Esta característica obliga a optimizar la capacidad instalada y la gestión de la demanda.
        .col-lg-1.fondocolumna
    separador

    #t_2_1.titulo-segundo.color-acento-contenido.mb-5
      h2 2.1 Tipos de servicios turísticos 
    .row
        .col-lg-12
          p.mb-4 Los principales tipos de servicios turísticos se clasifican en las siguientes categorías :
    .row.acordeon
        .col-lg-1
        .col-lg-10.col-md-12.col-sm-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="a) Servicios de alojamiento")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 Incluyen todos los establecimientos que ofrecen hospedaje temporal a los turistas. Constituyen uno de los componentes más importantes del turismo, ya que representan el lugar de llegada, descanso y resguardo del visitante. Según su categoría, estos pueden ofrecer servicios complementarios como restaurantes, entretenimiento, zonas de bienestar y actividades recreativas.
                  .mb-4
                  p.mb-0 #[strong Por categoría:] hoteles de 1 estrella, 2 estrellas, 3 estrellas, 4 estrellas y 5 estrellas. Cada categoría ofrece un portafolio de servicios diverso. Los establecimientos según su ubicación podemos encontrar:
                  .mb-4
                  p.mb-0 #[strong Alojamientos urbanos:] ubicados en zonas con alta densidad poblacional e infraestructura desarrollada.
                  .mb-4
                  p.mb-0 #[strong Alojamientos rurales o naturales:] ubicados en entornos donde predomina la naturaleza, como playas, montañas o bosques.
            .row.col-xl-11.m-auto(titulo="b) Servicios de alimentación")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 Son fundamentales para la satisfacción integral del turista. Pueden encontrarse dentro de los alojamientos (restaurantes de hotel) o como establecimientos independientes. Además del valor nutricional, la alimentación representa una forma de experimentar la cultura local, lo que da lugar a propuestas gastronómicas tradicionales, internacionales o de autor.
            .row.col-xl-11.m-auto(titulo="c) Servicios de transporte")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 Facilitan el desplazamiento de los turistas hacia, dentro y entre los destinos. Incluyen también el traslado de equipajes y mercancías asociadas a la estancia.
                  .mb-4
                  p.mb-0 #[strong Transporte terrestre:] trenes, autobuses, automóviles, motocicletas, bicicletas.
                  .mb-4
                  p.mb-0 #[strong Transporte aéreo:] aviones, helicópteros, teleféricos, telesillas.
                  .mb-4
                  p.mb-0 #[strong Transporte acuático:] cruceros, ferris, yates, veleros, botes a motor o remo.
            .row.col-xl-11.m-auto(titulo="d) Servicios de guía turística")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 Son proporcionados por profesionales formados para orientar, acompañar e informar a los visitantes. El guía interpreta el patrimonio natural y cultural del destino, garantiza la seguridad del grupo y enriquece la experiencia del viajero al brindar datos relevantes, recomendaciones y contexto histórico o ambiental.
            .row.col-xl-11.m-auto(titulo="e) Servicios de animación turística")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-12
                  p.mb-0 Consisten en actividades diseñadas para entretener, motivar y promover la participación de los turistas durante su estancia. Estas pueden desarrollarse en hoteles, cruceros, parques, playas, zonas rurales o centros recreativos, y suelen adaptarse al perfil del visitante (edad, intereses, cultura).
        .mb-4
        .col-lg-12
          p.mb-4 Los principales tipos de servicios turísticos se clasifican en las siguientes categorías :
        .tarjeta.color-adicional-1.p-4.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/9.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2.blu Ley 2068 de 2020
                  p.mb-0 Diríjase al siguiente enlace donde podrá conocer la Ley 2068 de 2020, por el cual se modifica la Ley 300 Ley General de Turismo y se dictan otras disposiciones. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=lIt_vdvmupM&t=350s" target="_blank")
                    span Ir al sitio
                    i.fas.fa-circle-play
        
</template>

<script>
export default {
  name: 'Tema2',
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
