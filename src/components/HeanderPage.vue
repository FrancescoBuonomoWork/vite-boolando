<script>

export default { 
    name: 'HeaderPage',
    components:{
    },
    data() {
      return {
       
        logoSRC: '"../assets/boolean-logo.png"',
        category:['Donna','Uomo','Bambini'],
        iconList:[{
            link: '#',
            icon: "fa-regular fa-user"
          },
          {
            link: '#',
            icon: "fa-regular fa-heart"
          },
          {
            link: '#',
            icon: "fa-solid fa-cart-shopping"
          }
        ]
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
                    <li 
                    v-for="iconLi in iconList">
                    <a :href=iconLi.link>
                      <font-awesome-icon :icon= iconLi.icon />
                    </a>
                    </li>
                    <!-- <li><a href="#">2</a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li> -->
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