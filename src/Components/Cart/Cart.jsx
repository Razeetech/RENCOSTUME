import useStore from '../../../store';

const Cart = () => {
  const { cart } = useStore()
  console.log(cart);
  return (
    <div>Cart</div>
  )
}

export default Cart