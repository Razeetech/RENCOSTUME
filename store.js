import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'

const useStore = create(persist(
    (set, get) => ({
        user: {},
        setUser(val) {
            set(state => ({
                ...state, user: val
            }))
        },
        session: {},
        setSession(val) {
            set(state => ({
                ...state, session: val
            }))
        },
        cart: [],
        count: () => {
            const { cart } = get();
            if (cart.length) return cart.map(item => item.quantity).reduce((prev, curr) => prev + curr);
            return 0;
        },
        totalCostFn: () => {
            const { cart } = get();
            if (cart.length) return cart.map(item => item.quantity*item.price).reduce((prev, curr) => prev + curr);
            return 0;
        },
        isChanged: false,
        addToCart(payload) {
            const { cart } = get();
            const updatedCart = updateCart(payload, cart);
            set(state => ({
                ...state, cart: updatedCart
            }));
        },
        removeFromCart(productName) {
            const { cart } = get();
            const updatedCart = removeCart(productName, cart);
            set(state => ({
                ...state, cart: updatedCart, isChanged: true
            }))
        },
        removeAll() {
            set(state => ({
                ...state, cart: []
            }));
        }
    }),
    {
        name: 'rencostume',
        storage: createJSONStorage(() => sessionStorage),
    }
));

function updateCart(product, cart) {
    const doesProductExist = cart.find(item => item.name === product.name);

    if (!doesProductExist) cart.push(product);
    else {
        return cart.map(item => {
            if (item.name === product.name) {
                return { ...item, quantity: doesProductExist.quantity + product.quantity }
            }

            return item
        })
    }
    return cart;
}

function removeCart(nameProduct, cart) {
    return cart.map(item => {
        if (item.name === nameProduct)
            return { ...item, quantity: item.quantity - 1 }
        return item;
    }).filter(item => {
        return item.quantity;
    });
}

export default useStore;