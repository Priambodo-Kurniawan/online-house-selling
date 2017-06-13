<template>
<div class="add well">
  <form class="form-horizontal">
    <fieldset>
      <div class="form-group">
        <label for="title" class="col-lg-2 control-label">Title</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" ref="title" id="title" placeholder="Ads Title here">
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
        <label for="price" class="col-lg-2 control-label">Price</label>
        <div class="col-lg-10">
          <input type="number" class="form-control" ref="price" id="price" placeholder="Enter price here">
        </div>
      </div>
      <div class="form-group">
        <label for="image" class="col-lg-2 control-label">Image</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" ref="image" id="image" placeholder="Your Image">
        </div>
      </div>
      <div class="form-group">
        <label for="select" class="col-lg-2 control-label">City</label>
        <div class="col-lg-10">
          <select class="form-control" id="select" ref="city">
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
          <input type="text" class="form-control" ref="location" id="location" placeholder="Location">
        </div>
      </div>
      <div class="form-group">
        <div class="col-lg-10 col-lg-offset-2">
          <button type="button" class="btn btn-primary" @click="submitData" >
            Submit
          </button>

        </div>
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
      data: null
    }
  },
  methods: {
    submitData(){
      let data = {}
      data.title = this.$refs.title.value
      data.description = this.$refs.description.value
      data.price = this.$refs.price.value
      data.image = this.$refs.image.value
      data.city = this.$refs.city.value
      data.location = this.$refs.location.value

      axios.post('http://localhost:5000/api/houses', data)
      .then((response) => {
        console.log(response.data);
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
</style>
