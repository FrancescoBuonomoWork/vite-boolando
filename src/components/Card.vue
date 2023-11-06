<script>
export default {
    name: 'Card',
}
</script>

<template>
    
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
    
   
</template>

<style scoped>
.card {

    .card__img {
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

    .card__elements {
        position: absolute;
        bottom: 30px;
        left: 0;
    }

    .price-redution {
        background-color: red;
        color: white;
        padding: 3px;

    }

    .sustainability {
        background-color: green;
        color: white;
        padding: 3px;
        margin-left: 5px;
    }


    /* descrizione card  */
    .brand {
        font-size: small;
    }

    .product {
        text-transform: uppercase;
        font-weight: 700;
    }

    .discounted-price {
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

    &:hover {
        .hovered-img {
            opacity: 1;
            position: static;

        }
        .base-img {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        }
        .heart {
        color: red;
        }   
    }
}
</style>