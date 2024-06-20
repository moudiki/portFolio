<script setup >
import myFooter from './myFooter.vue';
import NavBar from './navBar.vue';

   
</script>

<template  >

    <header>
        <navBar />
    </header>
    <div class="  uk-container mt-10  " uk-scrollspy="cls: uk-animation-slide-bottom; target: .resume; delay: 500; repeat: true">
        <div class="relative w-fit m-auto resume">
                <h1 class="font-bold z-0 absolute left-[-10px] bottom-[-17px] text-center " >Works</h1>
                <h1 class="text-white font-bold z-100 relative text-center " >Works</h1>
        </div>
        <div class="grid gap-4 md:grid-cols-2 resume mt-10" >
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
        <div class="w-fit m-auto resume ">
            <button class="bg-gold px-7 py-4 rounded-full mt-10 " ><a class="text-black mt-4 " >Download CV</a></button>

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