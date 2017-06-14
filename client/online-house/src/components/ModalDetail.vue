<template>
<div class="detail-house" v-if="data != null">
  <div id="detailModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{data.title}}</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="image-wrapper">
                <!-- <img v-for="image in data.image" :src="image" alt=""> -->
                <img :src="data.image[0]" alt="" class="img-responsive">
              </div>
            </div>
            <div class="col-md-6">
              <h4><strong>Rp {{data.formatedPrice}}</strong></h4>
              <h5><strong>Lokasi</strong></h5>
              <p>{{data.location}}</p>
              <p><i class="fa fa-map-marker"></i> {{data.city}}</p>
            </div>
          </div>
          <h5><strong>Description</strong></h5>
          <p><small>{{data.description}}</small></p>
          <br>
        </div>
        <div class="modal-footer">
          <button type="button" name="button" class="btn btn-danger pull-right" @click="deleteHouse(data._id)">Delete</button>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>

export default {
  props: ['data'],
  name: 'detail-house',
  methods: {
    deleteHouse(id){
      axios.delete(`http://localhost:3000/api/houses/${id}`)
      .then((response) => {
        $('.close').trigger('click')
        location.reload();
      })
      .catch(err=> console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-footer{
    text-align: left;
  }
  .pull-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    .modal-dialog {
      width: 800px;
      margin: 30px auto;
    }
  }
</style>
