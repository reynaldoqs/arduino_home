<template>
<div class="p-20">
    <form class="w-full max-w-4xl mx-auto">
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 p-2 font-bold text-lg uppercase">
                Escoje tu destino
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Destino
                </label>
                <div class="relative">
                    <select @change="fetchCooperativas($event)" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option v-if="!destinos" selected="selected">cargando...</option>
                        <option :value="destino._id" v-for="(destino, index) in destinos" :key="index">{{destino.nombre}}</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Cooperativa
                </label>
                <div class="relative">
                    <select @change="selectCope($event)" ref="cooperativa" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option v-if="!cooperativas || cooperativas.length === 0" selected="selected">Seleccione destino...</option>
                        <option value="default" v-else>Seleccionar</option>
                        <option :value="coope.nombre" v-for="(coope, index) in cooperativas" :key="index">{{coope.nombre}}</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <div class="max-w-4xl mt-10 mx-auto">
        <table id="example" class="stripe hover w-full">
            <thead>
                <tr class="border-b border-grey-light">
                    <th data-priority="1">Costo</th>
                    <th data-priority="2">Mañana</th>
                    <th data-priority="3">Tarde</th>
                    <th data-priority="4">Noche</th>
                    <th data-priority="5">Teléfonos</th>
                </tr>
            </thead>
            <tbody v-if="selectedCooperativa">
                <tr class="my-row" v-for="(doc, index) in selectedCooperativa.destinos" :key="index">
                    <td>
                        {{doc.costo || 0}} Bs
                    </td>
                    <td>
                        <div v-for="(item, index) in doc.manana" :key="index">
                            {{item.horario}}
                        </div>
                    </td>
                    <td>
                        <div v-for="(item, index) in doc.tarde" :key="index">
                            {{item.horario}}
                        </div>
                    </td>
                    <td>
                        <div v-for="(item, index) in doc.noche" :key="index">
                            {{item.horario}}
                        </div>
                    </td>
                    <td>
                        <div v-for="(item, index) in doc.telefonos" :key="index">
                            {{item}}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import {
    getCooperativasDestino,
    getDestinos
} from '../services/cooperativas'
export default {
    name: 'atencion',
    data() {
        return {
            destinos: null,
            cooperativas: null,
            selectedCooperativa: null,
            isLoading: false,
            error: null
        }
    },
    methods: {
        selectCope(event) {
            const cope = event.target.value
            this.selectedCooperativa = this.cooperativas.find(x => x.nombre === cope)
        },
        async fetchCooperativas(event) {
            this.$refs.cooperativa.value = 'default'
            try {
                this.isLoading = true

                this.selectedCooperativa = null
                const idDestino = event.target.value
                const {
                    data
                } = await getCooperativasDestino(idDestino)
                this.cooperativas = data
                this.isLoading = false
            } catch (error) {
                this.error = error
            }
        },
        async fetch() {
            try {
                this.isLoading = true
                this.cooperativas = null
                const {
                    data
                } = await getDestinos()
                this.destinos = data.docs
                this.isLoading = false
            } catch (error) {
                this.error = error
            }
        }
    },
    mounted() {
        this.fetch()
    }
}
</script>
