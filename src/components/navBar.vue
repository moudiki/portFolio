<template>
  <nav class="uk-navbar-container" id="nav" >
    <div class="uk-container">
        <div uk-navbar  class="flex" >
            <div class="uk-navbar-left">
                ML

            </div>
            <div class="uk-navbar-right">
                
                <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"></a>
                <div  class="uk-dropbar uk-dropbar-top " id="drop"
                uk-drop="stretch: true; animation: reveal-top; animate-out: true; duration: 700">
                    <ul class=" uk-navbar-dropdown-nav text-xl text-white " uk-nav>
                        <li class=""><a href="#">Active</a></li>
                        <li class="mt-3" ><a href="#">Item</a></li>
                        <li class="mt-3" ><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  </nav>

</template>

<script>

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