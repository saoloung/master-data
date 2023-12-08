<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useProductStore } from '../stores/product'

const productStore = useProductStore()
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await productStore.loadProducts()
  isLoading.value = false
})

const deleteProduct = async (productId) => {
  isLoading.value = true
  await productStore.deleteProduct(productId)
  await productStore.loadProducts()
  isLoading.value = false
}

</script>

<template>
  <div>
    <h2>Product List View</h2>
  </div>
  <div v-if="isLoading">
    <h2>Loading...</h2>
  </div>
  <div>
    <RouterLink :to="{ name: 'product-create' }">
      <button>Create Product</button>
    </RouterLink>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Code</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Pic</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.list">
          <td> {{ product.id }} </td>
          <td> {{ product.productCode }} </td>
          <td> {{ product.productName }} </td>
          <td> {{ product.price }} </td>
          <td> <img :src="product.imageUrl"> </td>
          <td>
            <RouterLink :to="{ name: 'product-edit', params: { id: product.id } }">
              <button>See detail</button>
            </RouterLink>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
