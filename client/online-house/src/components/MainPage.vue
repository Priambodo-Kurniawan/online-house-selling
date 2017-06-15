<template>
  <div class="main-page">
    <MainHeader />
    <div class="container">
      <ViewBar />
    </div>
    <div class="products container" v-show="viewProducts">
      <Loader v-show="isLoading" />
      <div id="thumbnail-container" class="product-display flex active">
        <Thumbnail v-if="!isLoading" v-for="data in showData" :key="data._id" :data="data" @thisData="thisData" />
      </div>
      <div id="list-container" class="product-display flex active" style="display:none">
        <ListView v-for="data in showData" :key="data._id" :data="data" />
      </div>
      <Add />
    </div>
    <div class="container form">

    </div>
    <ModalDetail :data="currentData" />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Add from './Add'
import MainHeader from './MainHeader'
import ViewBar from './ViewBar'
import Thumbnail from './Thumbnail'
import Loader from './Loader'
import ModalDetail from './ModalDetail'
import ListView from './ListView'
export default {
  components: {
    Navbar,
    Add,
    MainHeader,
    ViewBar,
    Thumbnail,
    Loader,
    ModalDetail,
    ListView
  },
  data () {
    return {
      isLoading: true,
      currentData: null
    }
  },
  methods: {
    thisData(data){
      this.currentData = data
      console.log(data);
    }
  },
  name: 'main-page',
  computed: {
    viewProducts () {
      return this.$store.getters.viewProducts
    },
    showForm () {
      return this.$store.getters.showForm
    },
    getData () {
      return this.$store.commit('getData')
    },
    showData () {
      return this.$store.getters.data
    }
  },
  created () {
    this.showData
    let self = this
    setTimeout(function(){console.log(self.isLoading = false)}, 1000)
  },
  mounted () {
    this.getData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  min-height: 20vh;
}
.products {
  overflow: hidden;
}
.product-display {
  transform: translateX(-103%);
  transition: transform .5s ease;
  float: left;
  min-width: 100%;
}
.product-display.active {
  transform: translateX(0);
  transition: transform .5s ease;
}

</style>
