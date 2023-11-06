<script>
import HeaderPage from './components/HeanderPage.vue'
import Main from './components/Main.vue'
import FooterPage from './components/FooterPage.vue'
export default {
  components:{
      HeaderPage,
      Main,
      FooterPage
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
  <FooterPage/>
 
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
