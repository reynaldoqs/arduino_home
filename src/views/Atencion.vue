<template>
<div>
    <div class="mx-auto container pt-20">
        <h3 class="text-sm font-bold">OBJETOS ENCONTRADOS</h3>
    </div>
    <div class="p-20 pt-10 container mx-auto grid">
        <card v-for="(objeto, index) in objetos" :key="index" :imgUrl="objeto.urlImagen" :title="objeto.objeto" :description="objeto.estado" />
    </div>
    <div class="px-20 pb-20 container mx-auto">
        <h3 class="text-sm font-bold mb-4">INSTRUCCIONES</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus, quam ducimus obcaecati necessitatibus officiis iusto. Velit possimus quod harum iure omnis, officiis praesentium fuga, veritatis molestias, sapiente illo eaque!
        </p>
    </div>
    <div class="mx-auto container pb-10">
        <h3 class="text-sm font-bold">CONTACTO</h3>
    </div>
    <div class="pb-20 container mx-auto">
        <form class="w-full max-w-lg mx-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Nombres
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nombres">

                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                       Reclamo
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Reclamo">
                    <p class="text-gray-600 text-xs italic">Lotem</p>
                </div>
            </div>
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Enviar
      </button>
        </form>
    </div>
</div>
</template>

<script>
import {
    getObjetos
} from '../services/objetos'
import Card from '@/components/Card'
export default {
    name: 'atencion',
    data() {
        return {
            objetos: null,
            isLoading: false,
            error: null
        }
    },
    methods: {
        async fetch() {
            try {
                this.isLoading = true
                const {
                    data
                } = await getObjetos()
                console.log(data)
                this.objetos = data.docs
                this.isLoading = false
            } catch (error) {
                this.error = error
            }
        }
    },
    mounted() {
        this.fetch()
    },
    components: {
        Card
    }
}
</script>
<style scoped>
    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;

    }
</style>