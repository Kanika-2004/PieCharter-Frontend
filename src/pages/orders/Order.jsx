import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { placeOrder } from '../../Redux/Slices/OrderSlice'
import Layout from '../../layouts/Layout'
const Order = () => {

const navigate= useNavigate()
const dispatch=useDispatch()
const {cartsData} =useSelector((state)=>state.cart)

const [details,setdetails]=useState({
    paymentmethod:'OFFLINE',
    address:''
})

function handleuserinput(e){
    const {name,value}=e.target;
    setdetails({
        ...details,
        [name]:value
    })
}


async function handleformsubmit(e){
    e.preventDefault();
    if(details.paymentmethod==='' || details.address===''){
        toast.error("please fill all the fields");
        return
    }

    const response= await dispatch(placeOrder())
    console.log("order response",response)


    if(response?.payload?.data?.success) {
        toast.success('Order placed successfully');
        navigate('/order/success');
    } else {
        toast.error('Something went wrong cannot place order');
    }
}

  return (
    <Layout>
            <section className="text-gray-600 body-font min-h-56">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Thanks for Choosing Us {' '}</h1>

                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Total Price - 
                            <span className="font-bold text-red-900">
                                ₹ {cartsData?.item?.length === 0
                          ? ''
                          : cartsData?.item?.reduce((acc, items) => acc + items?.quantity*items?.product?.price , 0) }
                            </span>
                        </p> 
                    </div>

                    <form onSubmit={handleformsubmit}>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="paymentMethod" className="text-2xl leading-7 text-gray-600">
                                Payment Method
                            </label>
                            <select 
                                name="paymentmethod"
                                required
                                onChange={handleuserinput}
                                className="p-2 border rounded-md focus:outline-none focus:border-primary-500 bg-white text-gray-700 w-full"
                            >
                                <option value="OFFLINE">Offline</option>
                                <option value="ONLINE">Online</option>
                            </select>
                        </div>

                        <div className="relative flex-grow w-full my-5">
                            <label htmlFor="address" className="leading-7 text-2xl text-gray-600">
                                Address
                            </label>
                            <textarea 
                                name="address"
                                placeholder="Enter your address here..."
                                onChange={handleuserinput}
                                className="w-full p-2 border rounded-md focus:outline-none focus:border-primary-500 bg-white text-gray-700"
                            >
                            </textarea>
                        </div>

                        <button 
                            className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

            </section>
        </Layout>
  )
}

export default Order