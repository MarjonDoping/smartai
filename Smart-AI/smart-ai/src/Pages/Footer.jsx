import React from 'react'
import { MainButton } from '../components/Buttons'

const Footer = () => {
  return (
    <footer className="bg-white text-black p-24">
      <div className="container mx-auto flex flex-wrap justify-between ">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className="text-normal font-bold">Address</h3>
          <p className="text-normal pt-4 ">433 Collins Street</p>
          <p className="text-normal pt-4">Melbourne</p>
          <p className="text-normal pt-4 ">Victoria 3000</p>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className="text-normal font-bold">Get In Touch</h3>
          <p className="text-normal pt-4 ">Instagram</p>
          <p className="text-normal pt-4">Facebook</p>
          <p className="text-normal pt-4 ">Twitter</p>
          <p className="text-normal pt-4 ">Youtube</p>
          
        </div>
        <div className="w-full sm:w-auto">

        <img src="/images/logo.png" className="h-12" />
         
          <p className="text-normal pt-4 ">Subscribe</p>
          <form class="max-w-sm mx-auto">
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <MainButton
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </MainButton>
          </form>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer