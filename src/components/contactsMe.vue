<script setup >
import myFooter from './myFooter.vue';
import NavBar from './navBar.vue';

   
</script>

<template  >
    <header>
        <navBar />
    </header>
    <div class="uk-container" >
        <div class="relative w-fit m-auto mt-10 " >
                <h1 class="font-bold z-0 absolute left-[-10px] bottom-[-17px]" >Contact</h1>
                <h1 class="text-white font-bold z-100 relative " >Contact </h1>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 mt-20">
            <div class="w-fit m-auto " >
                <div class="bg-blond w-fit m-auto p-10 rounded-full " >
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#FFBD39"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                </div>
                <h2 class="text-white text-center " >Address</h2>
                <p class="text-center" >Yaounde, Cameroon</p>
                
            </div>
            <div class="w-fit m-auto " >
                <div class="bg-blond w-fit m-auto p-10 rounded-full " >
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFBD39"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"/></svg>
                </div>
                <h2 class="text-white text-center">Phone Number</h2>
                <p class="text-center" >237656017468</p>
                
            </div>
            <div class="w-fit m-auto " >
                <div class="bg-blond w-fit m-auto p-10 rounded-full " >
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFBD39"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
                </div>
                <h2 class="text-white text-center ">Email Adress </h2>
                <p class="text-center" >lmoudiki99@gmail.com</p>
            </div>
            <div class="w-fit m-auto " >
                <div class="bg-blond w-fit m-auto p-10 rounded-full " >
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFBD39"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
                </div>
                <h2 class="text-white text-center ">Email Adress </h2>
                <p class="text-center" >lmoudiki99@gmail.com</p>
            </div>
        </div>
        <div class="md:grid md:grid-cols-2 border mt-5" >
          
            <form class="bg-[#F8F9FA] p-5 ">
            <input type="text" placeholder="Your Name" class="border w-full mt-3 p-4 rounded-xl " >
            <input type="text" placeholder="Your Email" class="border w-full mt-3 p-4 rounded-xl " >
            <input type="text" placeholder="Subject" class="border w-full mt-3 p-4 rounded-xl " >
            <textarea name="" id="" placeholder="Message" class="w-full h-[200px] border rounded-xl p-4 mt-3"  ></textarea>
            <button class="bg-gold w-full py-3 rounded-full mt-2" ><a class="text-black" >Send Message</a></button>
            </form>
            <div class="bg-blond" >
                <img src="../assets/profil.png" >
            </div>
           
        </div>
       
    </div>
    <footer>
        <myFooter/>
    </footer>
</template>

