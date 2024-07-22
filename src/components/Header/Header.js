import logo from './logo.png'
import Cart from './Cart'

const Header=()=>{
return (
    <>
    <header className='flex justify-between'>
    <img src={logo} className='max-h-[200px] max-w-[200px]' />
    <Cart/>
    </header>
    </>
)
}
export default Header