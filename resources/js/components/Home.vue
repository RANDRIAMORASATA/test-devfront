<template>
    <div class="b container">
        <h1 class="font-lato text-primary">HOME</h1>
        <p class="font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis eius et nobis labore
            assumenda, quo exercitationem sunt similique eligendi? Officiis corporis totam, cumque voluptates asperiores
            sed. Saepe sit illum totam?</p>
        <Button color="primary">Je réserve mon test psychotechnique</Button>
        <Button color="dark">Filter</Button>
        <Search customClass="rounded-custom"></Search>
    </div>

</template>

<script>
import Button from './Button.vue';
import Search from './Search.vue';
export default {
    name: 'Home',
    components: {
        Button,
        Search
    }
};
</script>

<style scoped></style>
