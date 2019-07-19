<template>
    <v-img src="/img/home.jpg" height="100vh">
    <v-container fill-height>
        <v-layout align-center>
            <v-flex class="text-xs-center">
                <span class="app-title white--text">
                    Diary
                </span>
                <span class="app-description grey--text">
                    " record your memory ! "
                </span>
                <Navbar/>
            </v-flex>
        </v-layout>
    </v-container>
    </v-img>
</template>

<script>
    import Navbar from './Navbar'
    export default {
        components:{Navbar},
        mounted() {
            console.log('Home Component mounted.')
        }
    }
</script>

<style>
.app-title{
    font-family: 'Rozha One', serif;
    text-shadow: 0 0 30px #00000071;
    font-size: 10em;
    user-select: none;
}
.app-description{
    font-family: 'Rozha One', serif;
    text-shadow: 0 0 5px #ffffff;
    font-size: 1.5em;
    font-style: italic;
    user-select: none;
}
</style>
