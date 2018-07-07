// export const cityGuess = () => fetch('https://elm.cangdu.org/v1/cities?type=guess')

// export const hotcity = () => fetch('https://elm.cangdu.org/v1/cities?type=hot')

// fetch  两大缺点 一兼容性   二 api比较原始


import axios from 'axios'
const http = axios.create({
    baseURL: 'https://elm.cangdu.org',
    timeout: 10000
})

export const currentcity = (cityid) => {
    return new Promise((resolve, reject) => {
        const url = `/v1/cities/${cityid}`
        http.get(url)
        .then(res => {
            resolve(res)
        })
    })
}

//通过输入的文本进行模糊查询，不能进行计算， 获取 lbs lat lng
export const searchplace = (cityid, keyword) => {
    return new Promise((resolve, reject) => {
        const url = `/v1/pois?type=search&city_id=${cityid}&keyword=${keyword}`
        http.get(url)
        .then(res => resolve(res.data))
    })
}



export const cityGuess = () => {
    return new Promise((resolve, reject) => {
        fetch('https://elm.cangdu.org/v1/cities?type=guess')
        .then(res => res.json()) 
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

export const hotcity = () => {
    return new Promise((resolve, reject) => {
        fetch('https://elm.cangdu.org/v1/cities?type=hot')
        .then(res => res.json()) 
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}


export const getcaptchas = () => {
    return new Promise((resolve, reject) => {
        fetch('https://elm.cangdu.org/v1/captchas', {
            method: 'POST',
            body: {},
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json()) 
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}




