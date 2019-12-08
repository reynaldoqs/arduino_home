<template>
    <div class="destino-card" :style="{'background-image':'url('+urlImagen+')'}">
        <div class="content">
            <div class="title">
                {{nombre}}
            </div>
            <div class="description">
                {{descripcion}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'destino-card',
    props: {
        urlImagen: String,
        nombre: String,
        descripcion: String
    }
}
</script>
<style scoped>
    .destino-card{
        background-size: cover;
        position: relative;
        cursor: pointer;
    }
    .content{
        position: absolute;
        top: 0;
        left: 0;
        text-align: left;
        padding: 10px;
        opacity: 0;
        transition: .3s opacity ease;
        color: white;
        background-color: rgba(0, 0, 0, .7);
        width: 100%;
        height: 100%;
    }
    .destino-card:hover .content{
        opacity: 1;
    }
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    .description{
        position: absolute;
        bottom: 0;
        font-size: 15px; 
        line-height: 15px;
        padding: 15px;
        left: 0;
    }
</style>