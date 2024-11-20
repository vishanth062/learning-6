import Skeleton from '@mui/material/Skeleton';

const Shimmer=()=>{
    const array=Array.from({length:20})
    return(
        <ul className='flex justify-between flex-wrap gap-2 pr-4 pl-4'> 
{

array.map(()=>{

  return<li className="w-[300px] m-1 shadow-2xl rounded-md p-4 overflow-hidden flex flex-col ">
      <Skeleton  variant="rectangular" width={268} height={268} className='h-auto w-auto rounded-lg' />
      <Skeleton  variant="rectangular" width={268} height={40} className='mt-2 flex rounded-md' />
      <Skeleton variant="rectangular" width={80} height={40} className='mt-2 flex rounded-md' />
      <Skeleton  variant="rectangular" width={30} height={10} className='mt-2 flex rounded-md' />
      <Skeleton  variant="rectangular" width={50} height={20} className='mt-2 flex rounded-md' />
      <Skeleton  variant="rectangular" width={252} height={40} className='mt-2 flex rounded-lg' />
      </li>

})

}
</ul>
    )
}

export default Shimmer