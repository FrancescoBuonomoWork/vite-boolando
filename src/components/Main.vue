<script>
import Card from './Card.vue'
export default {
    name: 'Main',
    components:{
       Card
    }
}
</script>

<template>
    <div class="main-page">
        <div class="container pt-100">
            <div class="row">
                <div v-for="card in 6" class="col-4"><Card/></div>
              

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// @use './styles/general.scss';
// .card {

//     .card__img {
//         position: relative;
//     }

//     .heart {
//         font-size: 30px;
//         position: absolute;
//         top: 10px;
//         right: 20px;
//         width: 40px;
//         aspect-ratio: 1;
//         background-color: white;
//         line-height: 40px;
//         text-align: center;


//     }

//     .card__elements {
//         position: absolute;
//         bottom: 30px;
//         left: 0;
//     }

//     .price-redution {
//         background-color: red;
//         color: white;
//         padding: 3px;

//     }

//     .sustainability {
//         background-color: green;
//         color: white;
//         padding: 3px;
//         margin-left: 5px;
//     }


//     /* descrizione card  */
//     .brand {
//         font-size: small;
//     }

//     .product {
//         text-transform: uppercase;
//         font-weight: 700;
//     }

//     .discounted-price {
//         color: red;
//         display: inline-block;
//     }

//     .full-price {
//         display: inline-block;
//         text-decoration: line-through;
//     }

//     /* hover  */

//     .hovered-img {
//         opacity: 0;
//         position: absolute;
//         inset: 0;
//     }

//     /* quando card__img viene overato  */

//     &:hover {
//         .hovered-img {
//             opacity: 1;
//             position: static;

//         }
//         .base-img {
//         opacity: 0;
//         position: absolute;
//         top: 0;
//         right: 0;
//         }
//         .heart {
//         color: red;
//     }
//     }

//     // .card:hover .hovered-img {
//     //     opacity: 1;
//     //     position: static;

//     // }

//     // .card:hover .base-img {
//     //     opacity: 0;
//     //     position: absolute;
//     //     top: 0;
//     //     right: 0;
//     // }

//     // /* cuore rosso quando viene hoverato  */
//     // .card:hover .heart {
//     //     color: red;
//     // }
// }
</style>