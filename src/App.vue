<script>
import HeaderPage from './components/HeanderPage.vue'
import MainPage from './components/MainPage.vue'
import FooterPage from './components/FooterPage.vue'
import { store } from './store'

export default {
  components:{
      HeaderPage,
      MainPage,
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
  <MainPage/> 
  <FooterPage/>
 
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
