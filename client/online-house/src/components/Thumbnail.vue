<template>
  <div class="thumbnail-view">
    <div class="thumbnail">
      <a href="#" data-toggle="modal" data-target="#detailModal" @click="modalData(currentData)">
        <img :src="image" alt="Lights" style="width:100%">
        <div class="caption">
          <h5>Rp {{price}}</h5>
          <h4><strong>{{title}}</strong></h4>
          <p class="location"><i class="fa fa-map-marker"></i> {{city}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'desc', 'city', 'location', 'image', 'currentData'],
  name: 'thumbnail-view',
  data() {
    return {}
  },
  methods: {
    modalData(data){
      this.$emit('thisData', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .thumbnail-view {
    width: 25%;
    padding: 5px;
  }
  .thumbnail {
    padding: 0
  }
  .thumbnail .caption {
    min-height: 170px;
    position: relative;
    padding: 20px;
  }
</style>
