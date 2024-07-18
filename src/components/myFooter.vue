<template>
    <div class="  mt-32  flex flex-col md:flex-row  md:justify-between  "  >
        <ul class="flex gap-8  mt-5 text-white cursor-pointer" > 
             <li v-for="link in Links" :key="link.name" class="text-[14px]" >
                        <router-link :to="link.path" class=" text-white relative group cursor-pointer hover:text-gold hover:no-underline ">
                            {{link.name}}
                            <div
                                    class="absolute w-full h-0.5 bg-gold  scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                            </div>
                        </router-link>
                       
              </li>
        </ul>
        <p class="text-grey text-center text-[14px] " >©2024 Lionel Moudiki. All rights reserved</p>
    </div>
</template>

<script setup >
    const Links = [

                
                {name : "Home" , path: "/"},  
                {name : "About" , path: "/aboutMe"},
                {name : "Works" , path: "/myWorks"},
                {name : "Projects" , path: "/myProjects"},
               
            ]
</script>