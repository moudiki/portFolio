<script setup >
import myFooter from './myFooter.vue';
import MyProjectComp from './myProjectComp.vue';
import NavBar from './navBar.vue';

   
</script>

<template  >

    <header>
        <navBar />
    </header>
    <div class="  uk-container mt-10  " uk-scrollspy="cls: uk-animation-slide-bottom; target: .resume; delay: 300; ">
        <div class="relative w-fit m-auto resume">
                
                <h1 class="text-white font-bold z-100 relative text-center mt-20 " >My Open Source Projects</h1>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 resume mt-20  " >
            <div class="   rounded-xl    cursor-pointer hover:bg-blond p-3 project " >
                <h3 class="  text-white " >Chaires Website</h3>
                <p class="font-light" >A chair landing page where you can add proudct to the cart, remove product from the cart</p>
                <a href="https://add-to-cart-phi-eight.vercel.app/" class="flex gap-2 text-white hover:text-gold no-underline demo " > 
                   <p>Demo <span class="ml-1" >-></span></p>
                </a>
            </div>
            <div class="   rounded-xl    cursor-pointer hover:bg-blond p-3 project " >
               
                <h3 class="  text-white " >Union-Dental Webiste</h3>
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
      
    </div>
    <footer>
        <myFooter />
    </footer>
</template>

<style>
    body{
        background-color: black;
    }
</style>