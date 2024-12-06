<template>
    <div :class="[customClass, 'relative search rounded-custom w-full   px-6 py-3 shadow-2xl']">

        <div class="flex items-center space-x-4 ">
            <i class="icon-search fas fa-map-marker-alt mr-2 absolute left-4 "></i>
            <input type="text" v-model="searchQuery" placeholder="Rechercher..."
                class=" w-full pl-6 bg-transparent text-gray-700 focus:outline-none  " />
            <i class="icon fa-regular fa-paper-plane ml-1 absolute send "></i>
            <Button color="secondary" customClass="rounded-custom " :showIcon="false">RECHERCHER</Button>
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

.rounded-custom {
    border-radius: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
<style scoped>
.search i.send {
    left: 73%;
    font-size: 1.5rem;
}

.search i.icon-search {
    font-size: 2rem;
}
</style>
