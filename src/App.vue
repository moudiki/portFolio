<script setup>
    import UIkit from 'uikit';
    import Icons from 'uikit/dist/js/uikit-icons';
    UIkit.use(Icons);
</script>

<template>
  <div>
    <div class="uk-container  "  id="app"  >
    <header>
      
    </header>

    <RouterView />

    </div>
  </div>
 
 </template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  #app{
    
    background-color: black;
    font-family: "Poppins",Arial, sans-serif;
    font-weight: 600;
    font-style: normal;
  }
</style>
