<template>
    <div class="mx-auto container p-10 pt-20">
        <div class="grid">
            <div class="grid-item">Wifi</div>
            <div class="grid-item">Cafeteria</div>
            <div class="grid-item">BNB</div>
            <div class="grid-item">Banco</div>
            <div class="grid-item">Servicio Sanitario</div>
            <div class="grid-item">Heladeria</div>
            <div class="grid-item">Boleteria</div>
        </div>
    </div>
</template>
<style scoped>
    .grid{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .grid-item{
        background-color: orange; 
        width: 200px;
        height: 200px;
        margin: 20px 10px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bolder;
        font-size: 1.6rem;
    }
</style>