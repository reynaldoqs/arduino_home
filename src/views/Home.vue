<template>
  <div class="home">
    <img class="object-cover w-full home-banner" src="../assets/images/terminal.jpg" alt="terminal">
    <div class="info p-10 container mx-auto text-left">
      <h3 class="font-bold text-lg">MISION</h3>
      <p class="pl-10 my-4">Facilitamos uan experiencia integral de viajes y compras con calidad, calidez y conomia.</p>
      <h3 class="font-bold text-lg">VISION</h3>
      <p class="pl-10 mt-4">Ser la mejor terminal terrestre del pais y una de las mejores de America bajo modelo de autogestion.</p>
      <p class="pl-10 mt-4">la FUNDACION TERMINAL TERRESTRE GUAYAQUIL, es una persona juridica, sin fines de lucro, de accion social y civica, cuyo objeto consiste principalmente, en la administracion, transformacion y mejoramiento de la Terminal Terrestre de esta ciudad, sus socios fundadores son:</p>
    </div>
    <div class="sites py-4 px-20 container mx-auto">
      <card description="Soemthing like this" title="Copacabana" imgUrl="http://www.eldiario.net/noticias/2014/2014_10/nt141010/f_2014-10-10_45.jpg" />
      <card title="Tiquina" imgUrl="https://rcbolivia.com/wp-content/uploads/2018/08/barcaza-estrecho-de-tiquina.jpg"/>
      <card title="San Jacinto" imgUrl="https://www.noticiasfides.com/images/news/2019/07/c-tiquina-399387-9895.jpg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'
export default {
  name: 'home',
  components: {
    Card
  }
}
</script>
<style scoped>
  .home-banner{
    height: 400px;
  }
</style>