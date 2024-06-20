<template>
  <nav class="uk-navbar-container   " id="nav" >
    <div class="uk-container ">
        <div uk-navbar  class="flex " >
            <div class="uk-navbar-left cursor-pointer ">
                <router-link to="/" class="hover:no-underline " > 
                    <h2 class="text-white hover:text-gold " >LM</h2>
                </router-link>
              

            </div>
            <div class="uk-navbar-right lg:hidden  ">
                
                <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"></a>
                <div  class="uk-dropbar uk-dropbar-top " id="drop"
                uk-drop="stretch: true; animation: reveal-top; animate-out: true; duration: 700">
                    <ul class=" uk-navbar-dropdown-nav text-xl bg-black text-white" uk-nav>
                       <li v-for="link in Links" :key="link.name">
                         <router-link class="text-white" :to="link.path" > {{link.name}} </router-link>
                       </li>
                       
                    </ul>
                </div>
            </div>
            <div class="uk-navbar-right hidden lg:block ">
                <ul class="uk-navbar-nav flex gap-16 ">
                    <li v-for="link in Links" :key="link.name">
                        <router-link :to="link.path" class=" text-white relative group cursor-pointer hover:text-gold">
                            {{link.name}}
                            <div
                                    class="absolute w-full h-0.5 bg-gold top-14 scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                            </div>
                        </router-link>
                       
                    </li>
                    

                </ul>

            </div>

        </div>
    </div>
  </nav>

</template>

<script setup >
    const Links = [
                
                {name : "About" , path: "/aboutMe"},
                {name : "Works" , path: "/myWorks"},
                {name : "Projects" , path: "/myProjects"},
                {name : "Contacts" , path: "/contactsMe"},
            ]
</script>

<style>
    #nav{
        color: white;
        background-color: black;
    }
    #drop{
        color: white;
        background-color: black;
    }
    
    
</style>