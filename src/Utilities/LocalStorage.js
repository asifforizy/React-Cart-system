// to get something from local storage , you will get is as string 
// convert this to javaScript object/array

const getCartFromLS = () => {
    const storedCardString = localStorage.getItem("cart");
    if(storedCardString){
        const storedCart = JSON.parse(storedCardString);
        return storedCart;
    }
    return [];
}

const addToCartInLS = id => {
    const cart = getCartFromLS();
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));



}


const removeCartInLS = id => {
    const cart = getCartFromLS();
    const newCart = cart.filter(itemId => itemId !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
}

export { getCartFromLS, addToCartInLS , removeCartInLS };

