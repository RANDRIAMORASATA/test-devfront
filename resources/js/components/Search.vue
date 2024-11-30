<template>
    <div :class="[customClass, 'relative w-full max-w-4xl mx-auto mt-10 rounded-2xl px-4 py-2 shadow-2xl']">
        <div class="flex items-center space-x-4 ">
            <i class="icon fas fa-map-marker-alt mr-2 absolute left-8 "></i>

            <input type="text" v-model="searchQuery" placeholder="Rechercher..."
                class="w-full pl-6 bg-transparent text-gray-700 focus:outline-none  " />

            <Button color="secondary" customClass="rounded-custom" :showIcon="false">RECHERCHER</Button>
        </div>
    </div>

</template>

<script>
import Button from './Button.vue';
export default {
    name: 'Search',
    components: {
        Button,
    },
    data() {
        return {
            searchQuery: '',
        };

    },
    props: {
        customClass: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleSearch() {
            console.log('Recherche:', this.searchQuery);
        },
    }
}
</script>

<style>
.fas {
    font-size: 18px;
}

.text-secondary {
    color: var(--secondary);
}

.bg-secondary {
    background-color: var(--secondary);
}


input {
    background-color: white;
    cursor: pointer;
}

button {
    cursor: pointer;
}
</style>
<style scoped>
i {
    color: gray;
    z-index: 1;
}

button i {
    position: relative;
    left: -130%;

}
</style>
