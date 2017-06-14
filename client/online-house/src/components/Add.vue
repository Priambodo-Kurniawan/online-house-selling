<template>
<div class="add well">
  <form class="form-horizontal">
    <fieldset>
      <div class="form-group">
        <label for="title" class="col-lg-2 control-label">Title</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" ref="title" id="title" placeholder="Ads Title here" required>
        </div>
      </div>
      <div class="form-group">
        <label for="description" class="col-lg-2 control-label">Description</label>
        <div class="col-lg-10">
          <textarea class="form-control" ref="description" rows="3" id="description"></textarea>
          <span class="help-block">Please describe property that you want to sell.</span>
        </div>
      </div>
      <div class="form-group">
        <label for="lb" class="col-lg-2 control-label">Luas Bangunan</label>
        <div class="col-lg-4">
          <input type="number" class="form-control" ref="lb" id="lb" placeholder="Luas Bangunan (dalam m2)" required>
        </div>
        <label for="lt" class="col-lg-2 control-label">Luas Tanah</label>
        <div class="col-lg-4">
          <input type="number" class="form-control" ref="lt" id="lt" placeholder="Luas Tanah (dalam m2)" required>
        </div>
      </div>
      <div class="form-group">
        <label for="kt" class="col-lg-2 control-label">Kamar Tidur</label>
        <div class="col-lg-4">
          <input type="number" class="form-control" ref="kt" id="kt" placeholder="Jumlah Kamar Tidur" required>
        </div>
        <label for="km" class="col-lg-2 control-label">Kamar Mandi</label>
        <div class="col-lg-4">
          <input type="number" class="form-control" ref="km" id="km" placeholder="Jumlah Kamar Mandi" required>
        </div>
      </div>
      <div class="form-group">
        <label for="price" class="col-lg-2 control-label">Price</label>
        <div class="col-lg-10">
          <input type="number" class="form-control" ref="price" id="price" placeholder="Enter price here" required>
        </div>
      </div>
      <div class="form-group">
        <label for="image" class="col-lg-2 control-label">Image</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" ref="image" id="image" placeholder="Your Image" required>
        </div>
      </div>
      <div class="form-group">
        <label for="select" class="col-lg-2 control-label">City</label>
        <div class="col-lg-10">
          <select class="form-control" id="select" ref="city" required>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Bogor">Bogor</option>
            <option value="Depok">Depok</option>
            <option value="Tangerang">Tangerang</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="location" class="col-lg-2 control-label">Location</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" ref="location" id="location" placeholder="Location" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-lg-10 col-lg-offset-2">
          <button type="submit" class="btn btn-primary" @click="submitData" >
            Submit
          </button>
        </div>
      </div>
      <div class="alert alert-danger col-lg-10 col-lg-offset-2" v-show="error">
        <strong>Please fill the form completely!</strong>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
      data: null,
      error: false
    }
  },
  methods: {
    submitData(){
      let data = {}
      data.title = this.$refs.title.value || null
      data.description = this.$refs.description.value || null
      data.price = this.$refs.price.value || null
      data.image = this.$refs.image.value || null
      data.city = this.$refs.city.value || null
      data.location = this.$refs.location.value || null
      data.lb = this.$refs.lb.value || null
      data.lt = this.$refs.lt.value || null
      data.kt = this.$refs.kt.value || null
      data.km = this.$refs.km.value || null

      let self = this
      axios.post('http://localhost:3000/api/houses', data)
      .then((response) => {
        if (response.data.errors) {
          self.error = true
          setTimeout(function(){ self.error = false }, 2000)
        } else {
          this.$store.commit('pushData', response.data)
          $('.add').removeClass('active')
          $('.product-display').addClass('active')
          location.reload()
          // console.log(response.data);
        }
      })
      .catch( err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel.panel-default {
    background-color: #ecf0f1;
  }
  .add {
    transform: translateX(103%);
    transition: transform .5s ease;
  }
  .add.active {
    transform: translateX(0);
    transition: transform .5s ease;
    min-height: 700px;
  }
  .add .form-horizontal {
    position: relative;
    background-color: red;
  }
  .add fieldset {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
