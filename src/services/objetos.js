import {crudder} from './crudder'
const base = crudder('http://127.0.0.1:3000')
const objetos = base('objetos')

export const getObjetos = (params) => {
    return objetos.get(params)
}