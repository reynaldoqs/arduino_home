import axios from 'axios'
export const crudder = domain => resource =>{
    const url = `${domain}/${resource}`
    return ({
        create: (x) => axios({
            method: 'post',
            url: url,
            data: x
        }),
        update: (x) => axios({
            method: 'patch',
            url: url,
            data: x
        }),
        get: (x) => axios({
            method:'get',
            url,
            params:x
        })
    })
}