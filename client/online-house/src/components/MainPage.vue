<template>
  <div class="main-page">
    <Navbar />
    <MainHeader />
    <div class="container">
      <ViewBar />
    </div>
    <div class="container">
      <Thumbnail v-show="viewProducts"
        v-for="data in showData"
        :key="data._id"
        :title="data.title"
        :price="data.price"
        :desc="data.description"
        :city="data.city"
        :location="data.location"
        :image="data.image" />
      <Add v-show="showForm" />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Add from './Add'
import MainHeader from './MainHeader'
import ViewBar from './ViewBar'
import Thumbnail from './Thumbnail'
export default {
  components: {
    Navbar,
    Add,
    MainHeader,
    ViewBar,
    Thumbnail
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
    console.log(this.showData);
    this.getData
    this.showData
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
</style>
