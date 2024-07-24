<template>
    <div>
        <Card :product="product"></Card>
    </div>

    <div>
        <router-link class="btn btn-success" to="/">Volver al Home</router-link>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default{
    name: 'ProductView',
    props: {
    product: {
      type: Object,
      required: true
    }
  },

  components: {
    Card
  }
}
</script>

<style>

</style>