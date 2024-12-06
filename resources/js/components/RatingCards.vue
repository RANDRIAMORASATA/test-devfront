<template>
    <div class="flex justify-between gap-1 ">
        <div class=" p-4 border-gray-light-full flex flex-col items-center justify-center">
            <div class="flex items-center justify-between space-x-2">
                <img :src="google" alt="google" class="w-[15px]" />
            </div>

            <div class="flex items-center justify-center items-center">
                <div class="w-3 h-3 flex items-center justify-center text-yellow-500 text-bold">
                    <i class=" text-xs fa-solid fa-star"></i>
                </div>
                <div class="w-3 h-3 flex items-center justify-center text-yellow-500 text-bold">
                    <i class=" text-xs fa-solid fa-star"></i>
                </div>
                <div class="w-3 h-3 flex items-center justify-center text-yellow-500 text-bold">
                    <i class=" text-xs fa-solid fa-star"></i>
                </div>
                <div class="w-3 h-3 flex items-center justify-center text-yellow-500 text-bold">
                    <i class=" text-xs fa-solid fa-star"></i>
                </div>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <p class="text-xxs text-gray-500">
                    4.7 | 8 520 <span class="text-xxs">avis</span>
                </p>
            </div>
        </div>

        <div class="p-4 border-gray-light-full">
            <div class="flex items-center justify-center space-x-2">
                <i class=" text-xs text-sm fa-solid fa-star color-green"></i>
                <span class="text-sm font-semibold">TrustPilot</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <div class="w-3 h-3 bg-green-500 flex items-center justify-center rounded-sm">
                    <i class=" text-xs fa-solid fa-star text-white text-xxs"></i>
                </div>
                <div class="w-3 h-3 bg-green-500 flex items-center justify-center rounded-sm">
                    <i class=" text-xs fa-solid fa-star text-white text-xxs"></i>
                </div>
                <div class="w-3 h-3 bg-green-500 flex items-center justify-center rounded-sm">
                    <i class=" text-xs fa-solid fa-star text-white text-xxs"></i>
                </div>
                <div class="w-3 h-3 bg-green-500 flex items-center justify-center rounded-sm">
                    <i class=" text-xs fa-solid fa-star text-white text-xxs"></i>
                </div>
                <div class="w-3 h-3 bg-gray flex items-center justify-center rounded-sm">
                    <i class=" text-xs fa-solid fa-star-half-stroke text-white text-xxs"></i>
                </div>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <p class="text-xxs text-gray-500">
                    TrueScore 4.4 | 8 520 <span class="text-xxs">avis</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RatingCards',
    data() {
        return {
            logo: "/images/logo/lorem.jpg",
            google: "/images/logo/google.png",
        };
    },
};
</script>

<style scoped></style>
