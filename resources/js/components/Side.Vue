<template>
    <v-flex xs4 class="set-height background text-xs-center">
        <div class="message white--text">
            <span>{{message}}</span>
            <Navbar></Navbar>   
        </div>  
    </v-flex>
</template>

<script>
import Navbar from './Navbar'
export default {
    components:{Navbar},
    props:['message'],
    data() {
        return {
            
        }
    },
}
</script>

<style>
.set-height{
    display: flex;
    align-items: center;
    justify-content: center;

}
.background{
    background-color: #857676
}
.message{
    font-size: 2em
}
</style>
