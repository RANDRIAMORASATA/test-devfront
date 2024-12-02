<template>
    <div class="flex   md:flex-row gap-1  border-gray-light-full w-full">
        <div class=" flex flex-1 flex-col justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 border-b border-gray-light-bottom ml-2 mr-2">
                <!-- Section Jour et Date -->
                <div class="p-4 flex  flex-col gap-2">
                    <div class="font-bold text-xm">{{ day }}</div>
                    <div class="text-xm">{{ date }}</div>
                </div>

                <!-- Section Adresse -->
                <div class="p-4 flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span class="text-xs">{{ address }}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 ml-2 mr-2">
                <div class="p-4 flex items-center">
                    <div class="text-xs text-primary">{{ address }}</div>
                </div>


                <div class="p-4 flex items-center text-red-500 text-sm">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <span class="text-xs">{{ urgentText }}</span>
                </div>
            </div>
        </div>
        <div class="p-4  border-gray-light-full  ">
            <div class="flex">
                <div class="text-xl font-semibold">{{ newPrice }}</div>
                <div class="text-xs line-through mt-2">{{ oldPrice }}</div>
            </div>

            <div class="text-xs mt-1">Après rembourssement</div>
            <div class="mt-1 ">
                <button class="bg-primary text-white py-2 px-4 rounded hover:bg-green-600">Réserver</button>
            </div>
            <div class="text-sm mt-1">{{ availability }}</div>

        </div>


    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'PropertyCard',
    components: {
        Button,
    },
    props: {
        day: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        urgentText: {
            type: String,
            required: true,
        },
        newPrice: {
            type: String,
            required: true,
        },
        oldPrice: {
            type: String,
            required: true,
        },
        availability: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.border-gray-light-full {
    border-top: 0.1px solid var(--accent);
    border-left: 0.1px solid var(--accent);
    border-right: 0.1px solid var(--accent);
    border-bottom: 0.1px solid var(--accent);
    border-radius: 2px;
}

.border-gray-light-bottom {
    border-bottom: 0.1px solid var(--accent);
}
</style>
