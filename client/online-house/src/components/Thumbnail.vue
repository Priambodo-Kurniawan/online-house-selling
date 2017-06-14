<template>
  <div class="thumbnail-view">
    <div class="thumbnail">
      <a href="#">
        <img :src="image" alt="Lights" style="width:100%">
        <div class="caption">
          <h5>Rp. {{price}}</h5>
          <h4><strong>{{title}}</strong></h4>
          <p><i class="fa fa-map-marker"></i> {{city}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'desc', 'city', 'location', 'image'],
  name: 'thumbnail-view',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .thumbnail-view {
    width: 25%;
    padding: 5px;
  }
</style>
