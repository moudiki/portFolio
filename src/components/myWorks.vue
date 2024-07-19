<script setup >
import myFooter from './myFooter.vue';
import navBar from './navBar.vue';

   
</script>

<template  >

    <header>
        <navBar />
    </header>
    <div class="  uk-container mt-10  " uk-scrollspy="cls: uk-animation-slide-bottom; target: .resume; delay: 500;">
        <div class="relative w-fit m-auto resume">
                <h1 class="font-bold z-0 absolute left-[-10px] bottom-[-17px] text-center " >Works</h1>
                <h1 class="text-white font-bold z-100 relative text-center " >Works</h1>
        </div>
        <div class="grid gap-4 md:grid-cols-2 resume mt-10" >
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" > 04/2023 - Present</h2>
                <h2 class="mt-0 text-white  " >Front-end developer at Gohze</h2>
                <p>Intregation of the frontend part of all the application develop at the company</p>
            </div>
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" > 04/2023 - Present</h2>
                <h2 class="mt-0 text-white  " >Front-end developer at Gohze</h2>
                <p>Intregation of the frontend part of all the application develop at the company</p>
            </div>
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" > 04/2023 - Present</h2>
                <h2 class="mt-0 text-white  " >Front-end developer at Gohze</h2>
                <p>Intregation of the frontend part of all the application develop at the company</p>
            </div>
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" > 04/2023 - Present</h2>
                <h2 class="mt-0 text-white  " >Front-end developer at Gohze</h2>
                <p>Intregation of the frontend part of all the application develop at the company</p>
            </div>
        </div>
        <div class="w-fit m-auto mt-10" >
            <a href="" class="no-underline bg-gold text-black p-4 rounded-full  hover:bg-grey" >Download CV</a>
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