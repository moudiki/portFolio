<script setup>
  import navBar from "../components/navBar.vue"
</script>

<template>
  <header>
     <navBar />
  </header>
  <main>
    
    <section>
      <div class="uk-container mt-[120px]" >
        <div>
          <h3 class=" text-center" >HELLO!</h3>
          <h1 class=" text-center" >I'm  a <span class="text-gold" >Lionel Moudiki</span></h1>
          <h1 class=" text-center" >A Front-end Developer</h1>
        </div>
        <div class="flex gap-5 mt-16 w-fit m-auto ">
          <button><a class="text-black bg-gold py-3 px-4 rounded-full">HIRE ME</a></button>
          <button><a class="bg-black text-white py-3 px-4 rounded-full">MY WORKS</a></button>
        </div>
        
      </div>
      
    </section>
  </main>
</template>
