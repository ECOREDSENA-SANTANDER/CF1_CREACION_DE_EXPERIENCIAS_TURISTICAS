<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El turismo, como fenómeno social, responde a la necesidad humana de descanso, ocio, descubrimiento y contacto con nuevas culturas y entornos. Las personas viajan en busca de experiencias significativas, motivadas por el deseo de conocer nuevos destinos, disfrutar de paisajes únicos y acceder a los diversos servicios turísticos que ofrece cada lugar, según sus intereses y expectativas.
    p El mapa conceptual titulado “Conexiones turísticas – tejiendo experiencias” organiza los contenidos clave del sector turístico en cuatro ejes: la normativa de formalización, que incluye al usuario del turismo; los servicios turísticos, con sus características y tipologías; el mercado del turismo, representado por la cadena de valor; y las tendencias del sector, que proyectan el futuro del turismo y del mercado turístico. Esta estructura permite comprender de manera integral cómo se conectan los distintos elementos que conforman la experiencia turística.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
