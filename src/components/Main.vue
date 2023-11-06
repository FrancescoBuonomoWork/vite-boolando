<script>
export default {
    name: 'Main',
}
</script>

<template>
    <div class="main-page">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <!--inizio Prima card  -->
                        <div class="card">
                            <!-- nb all interno del figure solo l' img  -->
                            <figure class="card__img">
                                <!-- immagine  -->
                                <img class="base-img" src="../assets/1.webp">
                                <img class="hovered-img" src="../assets/1b.webp">
                            <div class="heart">&hearts;</div>
                            <div class="card__elements">
                                <span class="price-redution">-50%</span>
                                <span class="sustainability">Sostenibilità</span>
                            </div>
                            </figure>
                            <div class="card__desciption">
                                <span class="brand">Levi's</span>
                                <h2 class="product">Relaxed fit tee unisex</h2>
                                <span class="discounted-price">14,99 &euro;

                                </span>
                                <span class="full-price">29,99 &euro;</span>
                                <!-- nb invece di discotend e full(non propriamente corretti in questo caso dove dopo abbiamo un unico prezzo rosso) si dovrebbe usare first child e last child  -->
                            </div>

                        </div>
                        <!-- fine prima card  -->
                    </div>
                    <div class="col-4">
                        <!--inizio seconda card  -->
                        <div class="card">
                            <figure  class="card__img">
                                <!-- immagine  -->
                                <img class="base-img"  src="../assets/2.webp">
                                <img class="hovered-img" src="../assets/2b.webp">
                            <div class="heart">&hearts;</div>
                            <div class="card__elements">
                                <span class="price-redution">-30%</span>
                               
                            </div>
                            </figure>
                            <div class="card__desciption">
                                <span class="brand">Guess</span>
                                <h2 class="product">Roses tee</h2>
                                <span class="discounted-price">20,99 &euro;

                                </span>
                                <span class="full-price">29,99 &euro;</span>
                            </div>

                        </div>
                        <!-- fine seconda card  -->
                    </div>

                    <div class="col-4">
                        <!--inizio terza card  -->
                        <div class="card">
                            <figure class="card__img">
                                <!-- immagine  -->
                                <img class="base-img" src="../assets/3.webp">
                                <img class="hovered-img" src="../assets/3b.webp">
                            <div class="heart">&hearts;</div>
                            <div class="card__elements">
                                <span class="price-redution">-30%</span>
                                
                            </div>
                            </figure>
                            <div class="card__desciption">
                                <span class="brand">Come Zucchero Filato</span>
                                <h2 class="product">Voglia di colori pastello</h2>
                                <span class="discounted-price">129,99 &euro;

                                </span>
                                <span class="full-price">184,99 &euro;</span>
                            </div>

                        </div>

                        
                        <!-- fine terza card  -->
                    </div>
                    <div class="col-4">
                        <!--inizio quarta card  -->
                        <div class="card">
                            <figure  class="card__img">
                                <!-- immagine  -->
                                <img class="base-img" src="../assets/4.webp">
                                <img class="hovered-img" src="../assets/4b.webp">
                            <div class="heart">&hearts;</div>
                            <div class="card__elements">
                                <span class="price-redution">-50%</span>
                                <span class="sustainability">Sostenibilità</span>
                            </div>
                            </figure>
                            <div class="card__desciption">
                                <span class="brand">Levi's</span>
                                <h2 class="product"> tee unisex</h2>
                                <span class="discounted-price">14,99 &euro;

                                </span>
                                <span class="full-price">29,99 &euro;</span>
                            </div>

                        </div>
                        <!-- fine quarta card  -->
                    </div>
                    <div class="col-4">
                        <!--inizio quinta card  -->
                        <div class="card">
                            <figure  class="card__img">
                                <!-- immagine  -->
                                <img class="base-img" src="../assets/5.webp">
                                <img class="hovered-img" src="../assets/5b.webp">
                            <div class="heart">&hearts;</div>
                            <!-- <div class="card__elements">
                                <span class="price-redution">-50%</span>
                                <span class="sustainability">Sostenibilità</span>
                            </div> -->
                            </figure>
                            <div class="card__desciption">
                                <span class="brand">Maya Delux</span>
                                <h2 class="product">Stripe bodice</h2>
                                <span class="discounted-price">99,99 &euro;

                                </span>
                                
                            </div>

                        </div>
                        <!-- fine quinta card  -->
                    </div>
                    <div class="col-4">
                        <!--inizio sesta card  -->
                        <div class="card">
                            <figure class="card__img">
                                <!-- immagine  -->
                                <img class="base-img" src="../assets/6.webp">
                                <img class="hovered-img" src="../assets/6b.webp">
                            <div class="heart">&hearts;</div>
                            <div class="card__elements">
                                
                                <span class="sustainability">Sostenibilità</span>
                            </div>
                            </figure>
                            <div class="card__desciption">
                                <span class="brand">Espit</span>
                                <h2 class="product">Maglione - black</h2>
                                <span class="discounted-price">29,99 &euro;

                                </span>
                                <!-- <span class="full-price"> &euro;</span> -->
                            </div>

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    
</template>

<style scoped lang="scss">
// @use './styles/general.scss';
.card__img{
    position: relative;
}
.heart {
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
    width: 40px;
    aspect-ratio: 1;
    background-color: white;
    line-height: 40px;
    text-align: center;

    
}
.card__elements{
    position:absolute;
    bottom: 30px;
    left: 0;
}
.price-redution{
    /* position: absolute;
    bottom: 30px; */
    background-color: red;
    color: white;
    padding: 3px;
    
}

.sustainability{
    /* display: inline-block; */
    /* position: absolute;
    bottom: 30px;
    left: 40px; */
    background-color: green;
    color: white;
    padding: 3px;
    margin-left: 5px;
}


/* descrizione card  */
.brand{
    font-size: small;
}
.product {
    text-transform:uppercase;
    font-weight: 700;
}
.discounted-price{
    color: red;
    display: inline-block;
}
.full-price {
    display: inline-block;
    text-decoration: line-through;
}
/* hover  */

.hovered-img {
    opacity: 0;
    position: absolute;
    inset: 0;
}
/* quando card__img viene overato  */
.card:hover .hovered-img {
    opacity: 1;
    position: static;

}
.card:hover .base-img{
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
}
/* cuore rosso quando viene hoverato  */
.card:hover .heart{
    color: red;
}

</style>