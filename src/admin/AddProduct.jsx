import React from 'react'
import Layout  from '../layouts/Layout'
import Food from '../assets/images/food.svg'
const AddProduct = () => {
  return (
    <Layout>
        <section className='py-12'>
            <div className='flex items-center justify-center px-5'>
                <div>
                    <img src={Food}/>
                </div>
                <div className='max-w-md md:w-4/6 mx-auto mt-auto bg-white p-4'>
                    <h2 className='mb-4 text-2xl font-semibold'>
                        Add Product
                    </h2>
                    <form>
                            {/* ProductName */}
                        <div className='mb-4'>
                            <label
                             htmlFor='ProductName'
                              className='block text-sm  font-medium text-gray-700'
                            >
                                Product Name <span className='text-red-500'>*</span>

                            </label>

                            <input
                                type='text'
                                required
                                minLength={5}
                                maxLength={20}
                                name='ProductName'
                                id='ProductName'
                                className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 sm:text-sm'
                            />
                        </div>

                        {/* Description */}
                        <div className='mb-4'>
                            <label
                             htmlFor='description'
                              className='block text-sm  font-medium text-gray-700'
                            >
                                Description <span className='text-red-500'>*</span>

                            </label>

                            <input
                                type='text'
                                required
                                minLength={5}
                                maxLength={60}
                                name='description'
                                id='description'
                                className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        {/* Price */}
                        <div className='mb-4'>
                            <label
                             htmlFor='price'
                              className='block text-sm  font-medium text-gray-700'
                            >
                               Product Price <span className='text-red-500'>*</span>

                            </label>

                            <input
                                type='text'
                                required
                                name='price'
                                id='price'
                                className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        {/* Quantity */}
                        <div className='mb-4'>
                            <label
                             htmlFor='quantity'
                              className='block text-sm  font-medium text-gray-700'
                            >
                               Product Quantity <span className='text-red-500'>*</span>

                            </label>

                            <input
                                type='text'
                                required
                                name='quantity'
                                id='quantity'
                                className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        {/* category */}
                        <div className='mb-4'>
                            <label
                             htmlFor='category'
                              className='block text-sm  font-medium text-gray-700'
                            >
                              Select  Category <span className='text-red-500'>*</span>

                            </label>

                            <select
                                name='category'
                                id='category'
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                            >
                                <option value="veg">Vegetarian</option>
                                <option value="non-veg">Non-Vegetarian</option>
                                <option value="drinks">Soft Drinks</option>
                            </select>
                            
                        </div>
                        {/* image */}
                        <div className='mb-4'>
                            <label
                             htmlFor='description'
                              className='block text-sm  font-medium text-gray-700'
                            >
                                Product Image <span className='text-red-500'>(.jpg,.jpeg,.png)</span>

                            </label>

                            <input
                                type='file'
                                required
                                minLength={5}
                                maxLength={20}
                                name='productImage'
                                id='productImage'
                                accept='.jpg,.jpeg,.png'
                                className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <button 
                            type='submit'
                            className='w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out'
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default AddProduct