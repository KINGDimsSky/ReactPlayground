import axios from "axios";

export const getProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        callback(res.data); 
    }).catch((err) => {
        throw new Error(err);
    })
}

export const getDetailProducts = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        callback(res.data);
    }).catch((error) => {
        throw new Error(error);
    })
}