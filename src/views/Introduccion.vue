<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-5.col-md-10.imageintro
        img(src='@/assets/curso/intro/1.png', alt='')
      .col-lg-7
        p.mb-4 El turismo, como una de las actividades centrales para el desarrollo integral de las personas, los territorios y las comunidades, busca consolidar un modelo de desarrollo económicamente viable, socialmente justo y ambientalmente responsable. Este modelo promueve una distribución equitativa de los beneficios derivados del turismo, al tiempo que protege la identidad cultural y el entorno natural de los destinos. Contribuye al fortalecimiento del desarrollo socioeconómico local mediante la generación de empleo, el impulso a pequeños emprendimientos orientados a satisfacer las necesidades de turistas y visitantes, y la mejora de la infraestructura básica de las comunidades, tales como vías, servicios de salud y educación. Además, resalta el valor del patrimonio cultural y natural, fomenta el respeto por las tradiciones y costumbres locales, y promueve prácticas turísticas que minimicen el impacto ambiental y favorezcan la conservación de los ecosistemas.
    
    .row.justify-content-center
      .cajon.col-10.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5
        p.mb-0 Este desarrollo es posible con la participación activa de las comunidades en las actividades turísticas, mediante la capacitación y el fortalecimiento de habilidades que permitan a los residentes asumir roles de liderazgo en el sector. La organización comunitaria en torno a objetivos comunes favorece la creación de experiencias auténticas que conecten al turista con el entorno y sus habitantes. La inclusión en proyectos turísticos tanto en contextos urbanos como rurales fortalece el sentido de pertenencia, promueve la preservación cultural, mejora la calidad en la prestación de los servicios y proyecta una imagen positiva del destino. A partir de estos principios, se abordarán los conocimientos esenciales para el desarrollo de habilidades y competencias técnicas orientadas al conocimiento del turista, los servicios turísticos y la dinámica del mercado, como base para una gestión turística sostenible y pertinente.
      .col-lg-2.col-md-6.col-9.mb-0
            img(src='@/assets/curso/intro/2.png', alt='').imagehide

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption

</template>

<script>
export default {
  name: 'Introduccion',
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
