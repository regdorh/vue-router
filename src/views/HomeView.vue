<template>
  <Card :product="product" />
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
