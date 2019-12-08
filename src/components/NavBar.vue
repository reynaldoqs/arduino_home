<template>
    <div class="a-navbar">
        <div class="container mx-auto h-full">
            <ul class="flex justify-between h-full w-full font-bold text-xs text-gray-300 cursor-pointer">
                <router-link to="/home" tag="li"
                 :class="[currentPage.includes('home')?activeClass:'','flex items-center justify-center w-1/5 hover:bg-black hover:text-white']">INICIO</router-link>
                <router-link to="/destinos" tag="li"
                 :class="[currentPage.includes('destinos')?activeClass:'','flex items-center justify-center w-1/5 hover:bg-black hover:text-white']">DESTINOS</router-link>
                <router-link to="cooperativas" tag="li"
                 :class="[currentPage.includes('cooperativas')?activeClass:'','flex items-center justify-center w-1/5 hover:bg-black hover:text-white']">COOPERATIVAS</router-link>
                <router-link to="atencion" tag="li"
                 :class="[currentPage.includes('atencion')?activeClass:'','flex items-center justify-center w-1/5 hover:bg-black hover:text-white']">ATENCION AL CIUDADANO</router-link>
                <router-link to="servicios" tag="li"
                 :class="[currentPage.includes('servicios')?activeClass:'','flex items-center justify-center w-1/5 hover:bg-black hover:text-white']">SERVICIOS</router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'navbar',
    data(){
        return {
            activeClass: 'active'
        }
    },
    computed:{
        currentPage(){
            return this.$route.path
        }
    }
}
</script>
<style scoped>
.a-navbar{
    width: 100%;
    height: 45px;
}
.active{
  background-color: black;
  color: white;  
}
</style>