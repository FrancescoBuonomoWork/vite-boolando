<script>
import Card from './Card.vue';
import { store } from '../store';
// import FileJson from '../db.json'
import axios from 'axios';

export default {
    name: 'MainPage',
    components: {
        Card,
    },
    data() {
        return {
            store,
            open: false,
            selectedProduct:{}
            // products: FileJson.products
            // products: store.products
        }
    },
    mounted() {
        // console.log(FileJson);
    },
    created() {
        // con axios prendo dal server i dati che mi servono 
        axios.get('http://localhost:3000/products')
            .then(res => {
                const products = res.data;
                // console.log(res,products);
                this.store.products = products;
            })
    },
    methods:{
        closeModal(){
            this.open = false
            this.selectedProduct = {}
        },
        showModal(product){
            console.log('show mod',product);
            this.selectedProduct = product;
            this.open = true

        }
    }

}
</script>

<template>
    <div class="main-page">
        <div class="container pt-100">
            <div class="row">
                <div v-for="(product, index) in store.products" :key="index" class="col-4">
                    <Card @show="showModal" :product="product" />
                </div>
            </div>
        </div>
        <div v-show="open === true" class="modal-background">
            <div class="modal">
                <div class="modal__header">
                    <h6 class="modal-title">{{ selectedProduct.name }}</h6>
                    <font-awesome-icon @click="closeModal" class="closeMod" icon="fa-solid fa-circle-xmark" />
                </div>
                <div class="modal__body">
                    <div class="modal__body-img">
                        <img class="modal-img" :src="selectedProduct.frontImage">
                        <img class="modal-img" :src="selectedProduct.backImage"> 
                    </div>
                    <div class="modal__body-text">
                        <p>{{ selectedProduct.name }}</p>
                        <p>{{ selectedProduct.brand }}</p>
                        <p>{{ selectedProduct.price }} €</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-page {
    padding-bottom: 150px;
}

.modal-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
   .modal__header{
    display: flex;
    justify-content: space-between;
   }
   .closeMod{
    cursor: pointer;
   }
   .modal-title{
    font-size: 30px;
    font-weight: 700;
   }
   .modal__body{
    display: flex;
    gap: 10px;
   }
   .modal__body-img{
    .modal-img{
        height: 150px;
    }
   }
}

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