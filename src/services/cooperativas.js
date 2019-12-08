import {crudder} from './crudder'
const base = crudder('http://127.0.0.1:3000')
export const getDestinos = () => {
    const destinos = base('destinos')
    return destinos.get()
}
export const getCooperativasDestino = (idDestino) => {
    const coopes = base(`cooperativas?destino=${idDestino}`)
    return coopes.get()
}