<template>
    <div>
        <span v-if="this.$route.name != 'home'">
            <v-btn round to="/">Home</v-btn>
        </span>
        <v-btn round to="/write">WRITE</v-btn>
        <v-btn round to="/view">VIEW</v-btn>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
