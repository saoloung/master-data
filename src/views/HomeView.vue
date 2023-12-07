<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useProductStore } from '../stores/product'

const productStore = useProductStore()

onMounted(async () => {
  await productStore.loadProducts()
})

const deleteProduct = async (productId) => {
  try {
    await productStore.deleteProduct(productId)
    await productStore.loadProducts()
  } catch (error) {
    console.log('error', error)
  }
}

</script>

<template>
  <div>
    <h2>Product List View</h2>
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
          <th>Image URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.list">
          <td> {{ product.id }}</td>
          <td> {{ product.productCode }}</td>
          <td> {{ product.productName }}</td>
          <td> {{ product.price }}</td>
          <td> {{ product.imageUrl }}</td>
          <td>
            <RouterLink :to="{ name: 'product-edit', params: { id: product.id} }">
              <button>See detail</button>
            </RouterLink>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
