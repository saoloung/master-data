<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/product'

const productStore = useProductStore()

onMounted(async () => {
  await productStore.loadProducts()
})

</script>

<template>
  <div>
    <h2>Product List View</h2>
  </div>
  <div>
    <button>Create Product</button>
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
      <button>See detail</button>
      <button>Delete</button>
      </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
