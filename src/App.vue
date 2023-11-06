<script>
import Header from './components/Heander.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
      Header,
      Main,
      Footer
  },
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
 
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
