<template>
    <main>
        <CardComponent />
    </main>
</template>

<script>
import CardComponent from "./CardComponent.vue";
    export default {
        name: "MainComponent",
        components: {
            CardComponent,
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
main{
    height: calc(100vh - 79px);
    background-color: #434343;
}
</style>