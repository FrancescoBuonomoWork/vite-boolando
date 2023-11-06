<script>

export default { 
    name: 'HeaderPage',
    components:{
    },
    data() {
      return {
       
        logoSRC: '"../assets/boolean-logo.png"',
        category:['Donna','Uomo','Bambini']
      }
    },
    methods: {
    
    }

}
 

</script>

<template>
    <header class="header-page">
        <div class="container">
            <nav class="ds-flex-center navbar">
                <ul class="ds-flex-center">
                    <li v-for="elem in category"><a href="#">{{ elem }}</a></li>
                    <!-- <li><a href="#">Uomo</a></li>
                    <li><a href="#">Bambini</a></li> -->
                </ul>
                   <a href="#"><img class="img-header" src="../assets/boolean-logo.png"></a>
                <ul class="ds-flex-center">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
            </nav>
        </div>
        
    </header>

</template>

<style lang="scss">
// @use './styles/general.scss';
//@use '../styles/partials/_variables';
@use '../styles/partials/variables' as *;

.header-page {
    background-color: $header-color;
    // height: 10vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    color: white;
  .img-header{
    width: 150px;
  }
  .navbar{
    padding: 18px;
  }
}
// .ds-flex{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 10px;
// }
</style>