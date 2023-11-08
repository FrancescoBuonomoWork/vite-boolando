<script>
export default {
    name: 'Card',
    props: {
        product: {
            type: Object
        },
    }
}
</script>

<template>
    <div class="card">
        <!-- nb all interno del figure solo l' img  -->
        <figure class="card__img">
            <!-- immagine  -->
            <img class="base-img" :src="product.frontImage">
            <img class="hovered-img" :src="product.backImage">
            <div class="heart" :class="product.isInFavorites ? 'red' : ''">
                &hearts;</div>
            <div class="card__elements">
                <span v-for="badge in product.badges"  :class="badge.type">{{badge.value}}</span>
                <!-- <span  class="tag">{{product.badges[0].value}}</span> -->
            </div>
        </figure>
        <div class="card__desciption">
            <span class="brand">{{ product.brand }}</span>
            <h2 class="product">{{ product.name }}</h2>
            <span class="discounted-price">14,99 &euro;

            </span>
            <span class="full-price">{{ product.price }} &euro;</span>
        </div>

    </div>
</template>

<style scoped>
.card {
    .red{
        color: red;
    }

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

    .discount {
        background-color: red;
        color: white;
        padding: 3px;

    }

    .tag {
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