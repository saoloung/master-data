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
    }
  }

})
