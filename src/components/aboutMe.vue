<script setup >
import myFooter from './myFooter.vue';
import NavBar from './navBar.vue';


   
</script>
<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <div class="uk-container mt-10  grid lg:grid-cols-7 lg:gap-[150px] " uk-scrollspy="cls: uk-animation-slide-bottom; target: .about; delay: 300; repeat: true" >
            
            <div class=" mt-10 col-span-4" >
                <h1 class="text-white" >I'm <span class="text-gold" >Lionel Moudiki</span>, I live in Yaounde Cameroon.</h1>
                <p>I share a lot of my work on X, LinkedIn and GitHub. I’m always looking for new ways to connect with other developers and designers, so feel free to reach out and say hello!</p>
            </div>
        <div class=" about col-span-3 " >
                      
               <div class="border-b" >
                <div class="grid " >
                    <img src="../assets/profil.png" alt="">
                    
                    <div class="social flex gap-3 mt-10 " >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" class="" >
                        <g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path></g></g>
                        </svg> <p class="text-white" >Follow on facebook</p>
                    </div>
                <div class=" social flex gap-3 " >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" class="" >
                        <g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path></g></g>
                        </svg>
                         <p class="text-white" >Follow on Twitter</p>

                </div>
                <div class=" social flex gap-3  " >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256" class="" >
                    <g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M21.58008,7c-8.039,0 -14.58008,6.54494 -14.58008,14.58594v20.83203c0,8.04 6.54494,14.58203 14.58594,14.58203h20.83203c8.04,0 14.58203,-6.54494 14.58203,-14.58594v-20.83398c0,-8.039 -6.54494,-14.58008 -14.58594,-14.58008zM47,15c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM32,19c7.17,0 13,5.83 13,13c0,7.17 -5.831,13 -13,13c-7.17,0 -13,-5.831 -13,-13c0,-7.169 5.83,-13 13,-13zM32,23c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z"></path></g></g>
                    </svg>
                    <p class="text-white" >Follow on Instagram</p>
                </div>
                <div class=" social flex gap-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="38" viewBox="0,0,256,256" class="" >
                     <g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(3.55556,3.55556)"><path d="M36,12c13.255,0 24,10.745 24,24c0,10.656 -6.948,19.685 -16.559,22.818c0.003,-0.009 0.007,-0.022 0.007,-0.022c0,0 -1.62,-0.759 -1.586,-2.114c0.038,-1.491 0,-4.971 0,-6.248c0,-2.193 -1.388,-3.747 -1.388,-3.747c0,0 10.884,0.122 10.884,-11.491c0,-4.481 -2.342,-6.812 -2.342,-6.812c0,0 1.23,-4.784 -0.426,-6.812c-1.856,-0.2 -5.18,1.774 -6.6,2.697c0,0 -2.25,-0.922 -5.991,-0.922c-3.742,0 -5.991,0.922 -5.991,0.922c-1.419,-0.922 -4.744,-2.897 -6.6,-2.697c-1.656,2.029 -0.426,6.812 -0.426,6.812c0,0 -2.342,2.332 -2.342,6.812c0,11.613 10.884,11.491 10.884,11.491c0,0 -1.097,1.239 -1.336,3.061c-0.76,0.258 -1.877,0.576 -2.78,0.576c-2.362,0 -4.159,-2.296 -4.817,-3.358c-0.649,-1.048 -1.98,-1.927 -3.221,-1.927c-0.817,0 -1.216,0.409 -1.216,0.876c0,0.467 1.146,0.793 1.902,1.659c1.594,1.826 1.565,5.933 7.245,5.933c0.617,0 1.876,-0.152 2.823,-0.279c-0.006,1.293 -0.007,2.657 0.013,3.454c0.034,1.355 -1.586,2.114 -1.586,2.114c0,0 0.004,0.013 0.007,0.022c-9.61,-3.133 -16.558,-12.162 -16.558,-22.818c0,-13.255 10.745,-24 24,-24z"></path></g></g>
                    </svg>
                    <p class="text-white" >Follow on Github</p>
                </div>
                
            </div>
       
         </div>
         <p class="mt-10" > <a href="" class="text-white hover:text-gold " >lmoudiki99@gmail.com</a> </p>
               </div> 
                
       
    </div>
    </main>
    <footer class="mt-40" >
        <myFooter />
    </footer> 
</template>

<style>
    td{
        padding:10px;
    }
    .social{
        cursor: pointer;
        width: fit-content;
    }
    .social:hover svg g{
        fill: #FFBD39
    }
    .social:hover p{
        color: #FFBD39 !important
    }
</style>