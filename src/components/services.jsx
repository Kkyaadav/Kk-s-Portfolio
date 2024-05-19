import Card from './card'
function Services (){
    return(
        <div>
            <div className='flex items-center justify-center mt-2 p-1'>
            <img className='h-9 mt-4' src="/image.png" alt="" />
            <h2 className='text-4xl m-4 mx-0 py-4 md:p-4'>
             <span className='text-primary'>Services</span> Offered</h2>
             <img className='h-9 mt-4 scale-x-[-1]' src="/image.png" alt="" />
            </div>
        <div className='flex px-10 mb-5 gap-3 flex-wrap justify-center'>
        <Card head='Laundry in KG' img='/logo.png' des='Did a busy week lead to a dirty pile of clothes? Worry no more because we are here to clean them all with our laundry by KG service.'/>
        <Card head='Dry Cleaning' img='/vite.svg' des='Delicate fabric or heavy embroideries, fancy clothes, or dear apparel, you can trust us for the most caring dry cleaning services.'/>
        <Card head='Steam Washing' img='/logo.png' des='Get crisp-looking formals for your office and wrinkle-free clothes for home or other occasions with the magic of our steam iron.'/>
        <Card head='Dry Cleaning' img='/vite.svg' des='Delicate fabric or heavy embroideries, fancy clothes, or dear apparel, you can trust us for the most caring dry cleaning services.'/>
        </div>
        </div>
    )
}

export default Services