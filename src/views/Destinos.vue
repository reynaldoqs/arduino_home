<template>
<div class="p-20 container mx-auto grid">
   <destino-card
    v-for="(destino, index) in destinos" :key="index"
    :nombre="destino.nombre"
    :descripcion="destino.informacion"
    :urlImagen="destino.urlImagen"
   />
</div>
</template>

<script>
import {getDestinos} from '@/services/cooperativas'
import DestinoCard from '@/components/DestinoCard'
export default {
    name: 'destinos',
    data(){
        return {
            destinos:null,
            isLoading: false,
            error:null
        }
    },
    components: {
        DestinoCard
    },
    methods: {
      async fetch(){
          try {
              this.isLoading = true
              const {data} = await getDestinos()
              this.destinos = data.docs
            
              this.isLoading = false
          } catch (error) {
              console.error(error)
              this.isLoading = true
              this.error = error
          }
      }  
    },
    mounted(){
        this.fetch()
    }
}
</script>
<style scoped>
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 240px;
        grid-gap: 20px;
    }
</style>
