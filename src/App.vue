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

</style>
