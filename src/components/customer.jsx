import { defer } from 'react-router';
import Cc from './cc'


const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function  setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    
    //intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);




function Customer(){
   // console.log(document.getElementById('line1'))
    return(
        <div>
        <div className='flex items-center justify-center mt-2 p-1 '>
        <img className='h-9 mt-4' src="/image.png" alt="" />
        <h2 className='text-4xl m-4 mx-0 py-4 md:p-4'>
         <span className='text-primary'>Customer</span> feed</h2>
         <img className='h-9 mt-4 scale-x-[-1]' src="/image.png" alt="" />
        </div>
        <div className="flex flex-col gap-4 overflow-hidden">
            <div id='line1' className="flex gap-4 overflow-hidden w-screen  -translate-x-24 transition-transform ease-linear">
                <Cc name='kailash' img='/kke.png'/>
                <Cc name='kk' img='/kke.png'/>
                <Cc name='kailash' img='/kke.png'/>
                <Cc name='kk' img='/kke.png'/>
                <Cc name='kailash' img='/kke.png'/>
                <Cc name='kk' img='/kke.png'/>
                <Cc name='kailash' img='/kke.png'/>
                <Cc name='kk' img='/kke.png'/>
                <Cc name='kailash' img='/kke.png'/>
                <Cc name='kk' img='/kke.png'/>
                <Cc name='kailash' img='/kke.png'/>
                <Cc name='kk' img='/kke.png'/>
                
            </div>

            <div id='line2' className="  flex gap-4 overflow-hidden w-screen -translate-x-34">
              
              <Cc name='kk' img='/vite.svg'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/vite.svg'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/vite.svg'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              
          </div>

          <div id='line3' className=" flex  md:hidden gap-4  overflow-hidden w-screen -translate-x-10">
              
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              <Cc name='kk' img='/kke.png'/>
              
              
          </div>
        </div>
        <div className='h-[100px]'></div>
        </div>
    )
}

export default Customer