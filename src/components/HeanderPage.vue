<script>
export default {
    name: 'HeaderPage',
}
</script>

<template>
    <header class="header-page">
        <div class="container">
            <nav class="ds-flex navbar">
                <ul class="ds-flex">
                    <li><a href="#">Donna</a></li>
                    <li><a href="#">Uomo</a></li>
                    <li><a href="#">Bambini</a></li>
                </ul>
                   <a href="#"><img class="img-header" src="../assets/boolean-logo.png"></a>
                <ul class="ds-flex">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
        </div>
        

    </header>

</template>

<style scoped lang="scss">
// @use './styles/general.scss';
@use '../styles/partials/variables';
.header-page {
    background-color: orange;
    // height: 10vh;
    width: 100%;
    position: fixed;
    z-index: 1;
  .img-header{
    width: 150px;
  }
  .navbar{
    padding: 18px;
  }
}
.ds-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
</style>