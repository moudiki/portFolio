<script setup >
import myFooter from './myFooter.vue';
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
        <div class="grid gap-4 md:grid-cols-2 resume mt-20" >
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" >2021-2022</h2>
                <h2 class="mt-0 text-white  " >Bachelor's Degree in Software Engineering</h2>
                <p class="" >Siantou University</p>
            </div>
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" >2021-2022</h2>
                <h2 class="mt-0 text-white  " >Bachelor's Degree in Software Engineering</h2>
                <p class="" >Siantou University</p>
            </div>
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" >2021-2022</h2>
                <h2 class="mt-0 text-white  " >Bachelor's Degree in Software Engineering</h2>
                <p class="" >Siantou University</p>
            </div>
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" >2021-2022</h2>
                <h2 class="mt-0 text-white  " >Bachelor's Degree in Software Engineering</h2>
                <p class="" >Siantou University</p>
            </div>
            <div class="bg-blond p-7 rounded-md " >
                <h2 class="text-gold  font-bold" >2021-2022</h2>
                <h2 class="mt-0 text-white  " >Bachelor's Degree in Software Engineering</h2>
                <p class="" >Siantou University</p>
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