import axios from "axios";

const serviceUrl = 'http://localhost:5100/api/v1/'

export const customFetch = axios.create({
    baseURL: serviceUrl
})

export const formatPrice = {
}

export const generateAmt = (number) => {
    return Array.from({length:number}, (_, index) => {
        const amount = index + 1
        return <option key={amount} value={amount}>{amount}</option>
    })
}