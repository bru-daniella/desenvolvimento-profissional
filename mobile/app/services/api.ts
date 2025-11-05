import axios from "axios";
import Product from "../models/product";

const api = axios.create({
    baseURL: 'https://proweb.leoproti.com.br/'
})
const productsApi = {
    getAll: async (): Promise<Product[]> => {
        const response = (await api.get<any[]>('/produtos')).data;

        return response.map(product => {
            return { id: product.id, name: product.nome, price: product.preco }
        })
    },
    getOne: async (id: number) => {
        const product = (await api.get<any>('/produtos/' + id)).data;
        return { id: product.id, name: product.nome, price: product.preco }
    }
}

export default productsApi;