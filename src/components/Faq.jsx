import React from 'react'

function Faq() {
  return (
    <div>
      <div >
        <h2 className='font-semibold text-[24px] text-center m-4'>Help Center.</h2>
      </div>
      <div className='flex justify-center flex-col items-center my-4 '>
      <div className='w-[80%] flex flex-col gap-2'>
        <h2>Frequently Asked Questions.</h2>
       <details className='border rounded-md p-2 text-sm dark:border-gray-500'>
       <summary className='text-blue-500 text-lg'>Why Laundry Shop..?</summary>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint suscipit qui est. Ut iste ab dolorum quaerat magni perspiciatis cumque earum, assumenda officiis?
       </details>

       <details className='border rounded-md p-2 text-sm dark:border-gray-500'>
       <summary className='text-blue-500 text-lg'>Why Laundry Shop..?</summary>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint suscipit qui est. Ut iste ab dolorum quaerat magni perspiciatis cumque earum, assumenda officiis?
       </details>

       <details className='border rounded-md p-2 text-sm dark:border-gray-500'>
       <summary className='text-blue-500 text-lg'>Types of services provided..?</summary>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint suscipit qui est. Ut iste ab dolorum quaerat magni perspiciatis cumque earum, assumenda officiis?
       </details>

       <details className='border rounded-md text-sm dark:border-gray-500 p-2'>
       <summary className='text-blue-500 text-lg'>Some question Here..?</summary>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint suscipit qui est. Ut iste ab dolorum quaerat magni perspiciatis cumque earum, assumenda officiis?
       </details>

       <details className='border rounded-md text-sm dark:border-gray-500 p-2'>
       <summary className='text-blue-500 text-lg'>What are the Charges..?</summary>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint suscipit qui est. Ut iste ab dolorum quaerat magni perspiciatis cumque earum, assumenda officiis?
       </details>

       <details className='border rounded-md p-2 text-sm dark:border-gray-500'>
       <summary className='text-blue-500 text-lg'>What are the Benifits..?</summary>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint suscipit qui est. Ut iste ab dolorum quaerat magni perspiciatis cumque earum, assumenda officiis?
       </details>

       <details className='border rounded-md p-2 text-sm dark:border-gray-500'>
       <summary className='text-blue-500 text-lg'>Were are your offices..?</summary>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint suscipit qui est. Ut iste ab dolorum quaerat magni perspiciatis cumque earum, assumenda officiis?
       </details>
      </div>
      </div>
    </div>
  )
}

export default Faq