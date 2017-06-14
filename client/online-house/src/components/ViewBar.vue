<template>
<div class="view-bar">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li @click="showProducts" id="find-house" class="active"><p>Find House</p></li>
          <li @click="showForm" id="sell-house"><p>Sell House</p></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#"><i class="fa fa-th"></i></a></li>
          <li><a href="#"><i class="fa fa-th-list"></i></a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort By <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'view-bar',
  methods: {
    showForm() {
      $('#find-house').removeClass('active')
      $('#sell-house').addClass('active')
      $('.add').addClass('active')
      $('.product-display').removeClass('active')
      // this.$store.commit('showForm')
    },
    showProducts() {
      $('#find-house').addClass('active')
      $('#sell-house').removeClass('active')
      $('.add').removeClass('active')
      $('.product-display').addClass('active')
      // this.$store.commit('showProducts')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .view-bar {
    margin-top: 20px;
  }
  .navbar-nav > li > p {
    color: #fff;
    line-height: 21px;
    margin-bottom: 0;
    cursor: pointer;
    padding: 19.5px 15px;
  }
  .active {
    background-color: #1a242f;
  }
</style>
