<template>
  <div class="main-page">
    <Navbar />
    <MainHeader />
    <div class="container">
      <ViewBar />
    </div>
    <div class="products container" v-show="viewProducts">
      <Loader v-show="isLoading" />
      <div class="product-display flex active">
        <Thumbnail v-if="!isLoading"
        v-for="data in showData"
        :currentData="data"
        :key="data._id"
        :title="data.title"
        :price="data.formatedPrice"
        :desc="data.description"
        :city="data.city"
        :location="data.location"
        :image="data.image"
        @thisData="thisData" />
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
export default {
  components: {
    Navbar,
    Add,
    MainHeader,
    ViewBar,
    Thumbnail,
    Loader,
    ModalDetail
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
