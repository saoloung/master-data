import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'https://655da7e89f1e1093c599a5aa.mockapi.io/'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [],
    selectedProduct: {}
  }),
  actions: {
    async loadProducts() {
      try {
        const response = await axios.get(`${BASE_URL}/products`)
        this.list = response.data
        console.log('load product list complete')
      } catch (error) {
        console.log('error', error)
      }
    },
    async loadProduct(id) {
      try {
        const response = await axios.get(`${BASE_URL}/products/${id}`)
        this.selectedProduct = response.data
        console.log('load product by id complete')
      } catch (error) {
        console.log('error', error)
      }
    },
    async createProduct(productData) {
      try {
        const response = await axios.post(`${BASE_URL}/products`, productData)
        this.selectedProduct = response.data
        console.log('add product complete')
      } catch (error) {
        console.log('error', error)
      }
    },
    async editProduct(productData, id) {
      try {
        const response = await axios.put(`${BASE_URL}/products/${id}`, productData)
        console.log('edit product complete')
      } catch (error) {
        console.log('error', error)
      }
    },
    async deleteProduct(id) {
      try {
        const response = await axios.delete(`${BASE_URL}/products/${id}`)
        this.selectedProduct = response.data
        console.log('delete product complete')
      } catch (error) {
        console.log('error', error)
      }
    }
  }

})
