import logo from './logo.png'
import Cart from './Cart'

const Header=()=>{
return (
    <>
    <div className='pb-10 sticky top-0 z-10   '>
    <div className='flex justify-between px-4 shadow-md bg-white pr-4 pl-4'>
    <img src={logo} className='h-20' />
    <Cart/>
    </div>
    </div>
    </>
)
}
export default Header