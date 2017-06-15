<template>
  <div class="list-view">
    <div class="list">
        <div class="image-left">
          <img :src="data.image" alt="Lights" style="width:100%">
        </div>
        <div class="content-right">
          <div class="caption">
            <h5>Rp {{data.formatedPrice}}</h5>
            <a href="#" data-toggle="modal" data-target="#detailModal" @click="modalData(data)">
              <h4><strong>{{data.title}}</strong></h4>
            </a>
            <p class="location"><i class="fa fa-map-marker"></i> {{data.city}}</p>
            <textarea :value="data.description" rows="8" cols="80" disabled class="list-textarea"></textarea>
          </div>
          <div class="thumbnail-footer">
            <div class="flex">
              <div class="detail-icon" data-toggle="tooltip" title="Luas Tanah">
                {{data.lt}} m2
              </div>
              <div class="detail-icon" data-toggle="tooltip" title="Luas Bangunan">
                {{data.lb}} m2
              </div>
              <div class="detail-icon" data-toggle="tooltip" title="Jumlah Kamar Mandi">
                <i class="fa fa-bath" aria-hidden="true"></i> {{data.km}}
              </div>
              <div class="detail-icon" data-toggle="tooltip" title="Jumlah Kamar Tidur">
                <i class="fa fa-bed" aria-hidden="true"></i> {{data.kt}}
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
export default {
  props: ['data'],
  name: 'list-view',
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
  .list-view {
    width: 100%;
    padding: 5px;
  }
  .detail-icon {
    width: 25%;
    text-align: center;
    border: 1px solid #d2d2d2;
    padding: 14px;
    font-size: 12px;
    color: #717171;
  }
  .image-left {
    width: 40%;
  }
  .content-right {
    width: 60%;
    background-color: #fff;
    padding: 20px;
    position: relative;
  }
  .list {
    display: flex;
  }
  .thumbnail-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .list-textarea {
    width: 100%;
    background-color: white;
    border: none;
    min-height: 100px;
    max-width: 100%;
  }
</style>
