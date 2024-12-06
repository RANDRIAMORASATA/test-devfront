<template>
    <div class="flex   md:flex-row gap-1  border-gray-light-full w-full">
        <div class=" flex  flex-col justify-center w-[75%]">
            <div class="grid grid-cols-1 md:grid-cols-2 border-b border-gray-light-bottom ">
                <div class="p-2 flex  flex-col gap-1">
                    <div class="font-bold text-xs">{{ day }}</div>
                    <div class="text-xs">{{ date }}</div>
                </div>
                <div class="p-2 flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span class="text-xs">{{ address }}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 ">
                <div class="p-2 flex items-center">
                    <div class="text-xs text-primary">{{ address }}</div>
                </div>


                <div class="p-2 flex items-center text-red-500 text-sm">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <span class="text-xs">{{ urgentText }}</span>
                </div>
            </div>
        </div>
        <div class="p-2  border-gray-light-full flex flex-col justify-center items-center w-[25%]">
            <div class="flex">
                <div class="text-xl font-semibold">{{ newPrice }}</div>
                <div class="text-xs line-through mt-2">{{ oldPrice }}</div>
            </div>

            <div class="text-xs mt-1">Après rembourssement</div>
            <div class="mt-1 ">
                <button class="bg-primary text-white py-1 px-4 rounded hover:bg-secondary">Réserver</button>
            </div>
            <div class="text-xxs mt-1 text-center">{{ availability }}</div>

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

<style>
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
