import { reactive } from "vue";
import fileJSON from './db.json';

export const store = reactive({
    products: fileJSON.products
})