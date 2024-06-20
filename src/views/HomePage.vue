<script setup>
  import navBar from "../components/navBar.vue"
  

 
   import myFooter from "../components/myFooter.vue"

</script>

<template  >
  <header>
      <navBar/>
  </header>
  <main>
      <div class="uk-container mt-20" uk-scrollspy="cls: uk-animation-slide-bottom; target: .about; delay: 300; repeat: true mb-" >
      
     
      <div class="about " >
          <div class="relative md:pr-[250px] lg:pr-[300px] xl:pr-[600px] ">
             <h3 class="text-gold font-bold" >Hello!</h3>
             <h1 class="text-white font-bold mt-0" >I'm a <span class="text-gold" >Front-end Developer </span> </h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore cum culpa, at quaerat beatae maxime cumque dignissimos id facilis ipsum debitis veritatis, nobis odio sit necessitatibus inventore! Atque, illo omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore blanditiis ipsum, iure nemo facilis eveniet? Consequuntur, dolorem facere officiis, nulla amet ipsum ipsa id accusamus veritatis illum ratione. Ab, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt delectus nam repellat, assumenda tempore vel aperiam quas consectetur, pariatur qui illum quos? Veniam maxime nisi, voluptas enim praesentium vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores quo, voluptatem magni ullam, veniam iure eius cupiditate voluptates autem nesciunt laboriosam repudiandae repellendus sunt rerum itaque in alias veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente, tempora illo laudantium incidunt quod fugit. Commodi est eaque ipsa minus aliquam voluptatum, aperiam autem laudantium consequuntur omnis nostrum soluta.</p>
          </div>

       <div>
        <button class="bg-gold px-4 py-3 rounded-full" ><a class="text-black hover:no-underline hover:text-white" >Hire me</a></button>
        <button class="ml-10 text-white border px-4 py-3 rounded-full hover:bg-gold " > My Works</button>
       </div>
        

     
      </div>
      <div class="flex mt-10 gap-3" >
        <div class="cursor-pointer" >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" class="cursor-pointer hover:w-[32px]" >
<g fill="#ffbd39" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path></g></g>
</svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" class="cursor-pointer hover:w-[32px]" >
<g fill="#ffbd39" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path></g></g>
</svg>

        </div>
        <div>
          
        </div>
      </div>
      
     
  </div>
  </main>
  <footer>
      <myFooter />
  </footer> 
</template>

<style>
  td{
      padding:10px;
  }
  body{
      background-color: black;
  }
</style>