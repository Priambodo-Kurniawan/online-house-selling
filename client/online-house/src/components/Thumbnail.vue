<template>
  <div class="thumbnail-view">
    <div class="thumbnail">
      <a href="#" data-toggle="modal" data-target="#detailModal" @click="modalData(data)">
        <img :src="data.image" alt="Lights" style="width:100%">
        <div class="caption">
          <h5>Rp {{data.formatedPrice}}</h5>
          <h4><strong>{{data.title}}</strong></h4>
          <p class="location"><i class="fa fa-map-marker"></i> {{data.city}}</p>
        </div>
        <div class="thumbnail-footer">
          <div class="flex">
            <div class="detail-icon" data-toggle="tooltip" title="Luas Tanah">
              {{data.lt}}
            </div>
            <div class="detail-icon" data-toggle="tooltip" title="Luas Bangunan">
              {{data.lb}}
            </div>
            <div class="detail-icon" data-toggle="tooltip" title="Jumlah Kamar Mandi">
              <i class="fa fa-bath" aria-hidden="true"></i> {{data.km}}
            </div>
            <div class="detail-icon" data-toggle="tooltip" title="Jumlah Kamar Tidur">
              <i class="fa fa-bed" aria-hidden="true"></i> {{data.kt}}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
export default {
  props: ['data'],
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
    width: 33.33%;
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
  .detail-icon {
    width: 25%;
    text-align: center;
    border: 1px solid #d2d2d2;
    padding: 14px;
    font-size: 12px;
    color: #717171;
  }
</style>
