<template lang="">
  <!-- cartas -->
  <section class="container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- primera -->
      <div class="col-sm-4 col-12 px-5 mb-4">

        <div class="card">
          <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ product.title }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio : $ {{ product.price }}</li>
            <li class="list-group-item">Cantidad: {{ product.amount }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Card',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="">
  
</style>