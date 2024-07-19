<template  >

    <header>
        <navBar />
    </header>
    <div class="  uk-container mt-10  " uk-scrollspy="cls: uk-animation-slide-bottom; target: .resume; delay: 300; ">
        
             
                <h1 class="text-white font-bold z-100 relative text-center " >Projects</h1>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 resume mt-10  " >
            <div class="   rounded-xl    cursor-pointer hover:bg-blond p-3 project " >
                <h3 class="  text-white " >Chaires Website</h3>
                <p class="font-light" >A chair landing page where you can add proudct to the cart, remove product from the cart</p>
                <a href="https://add-to-cart-phi-eight.vercel.app/" class="flex gap-2 text-white hover:text-gold no-underline demo " > 
                   <p>Demo <span class="ml-1" >-></span></p>
                </a>
            </div>
            <div class="   rounded-xl    cursor-pointer hover:bg-blond p-3 project " >
                <h3 class="  text-white " >Chaires Website</h3>
                <p class="font-light" >A chair landing page where you can add proudct to the cart, remove product from the cart</p>
                <a href="https://add-to-cart-phi-eight.vercel.app/" class="flex gap-2 text-white hover:text-gold no-underline demo " > 
                   <p>Demo <span class="ml-1" >-></span></p>
                </a>
            </div>
            <div class="   rounded-xl    cursor-pointer hover:bg-blond p-3 project " >
                <h3 class="  text-white " >Chaires Website</h3>
                <p class="font-light" >A chair landing page where you can add proudct to the cart, remove product from the cart</p>
                <a href="https://add-to-cart-phi-eight.vercel.app/" class="flex gap-2 text-white hover:text-gold no-underline demo " > 
                   <p>Demo <span class="ml-1" >-></span></p>
                </a>
            </div>
            
        </div>
        <div class="mt-10 w-fit m-auto" >
            <router-link to="/myProjects" class="text-gold no-underline hover:ml-3 " >Se more projects <span class="ml-2" >-></span></router-link>
        </div>
       
       
    </div>
    
</template>

<style>
   .demo:hover>p{
        margin-left: 5px;
   }
</style>