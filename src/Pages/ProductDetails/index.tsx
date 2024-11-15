import Navigation from '../_Components/Navigation'
import CustomBreadCrumb from '../_Components/CustomBreadCrumb'


const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Shops",
        path: "/shops"
    },
    {
        name : "Men",
        path  : "/men"
    },
    {
        name: "T-Shirts",
        path: "/t-shirts",
        active: true
    }
]

function ProductDetails() {
  return (
    <>
        <Navigation />
        <div className='h-[1px] m-auto w-[90%] bg-slate-400 '></div>
        <CustomBreadCrumb links={links} />
    </>
  )
}

export default ProductDetails