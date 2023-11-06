<script>
import HeaderPage from './components/HeanderPage.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
      HeaderPage,
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
  <HeaderPage/>
  <Main/>
  <Footer/>
 
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
