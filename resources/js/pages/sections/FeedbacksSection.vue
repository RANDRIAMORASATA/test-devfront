<template>
    <div class="feed-back-section bg-gray-light">
        <div class="container mx-auto flex flex-col">
            <div class="title text-primary text-xl pt-10">Ce qu'en pense nos candidats</div>
            <div class="container-feedbacks py-10 w-full">

                <div class="container-slider flex-1 flex bg-white p-10 gap-x-6">

                    <div class="google-feedback flex flex-col justify-center items-center pr-4 pl-4">
                        <div class="title">Exellent</div>
                        <div class="stars flex">
                            <span v-for="star in 5" :key="'star-' + star" class="text-2xl">
                                <span v-if="star <= totalStars" class="text-yellow-500">★</span>
                                <span v-else class="text-gray-300">★</span>
                            </span>
                        </div>
                        <div class="text-xs">Based on <span class="text-xs font-bold underline text-black">414
                                reviews</span></div>
                        <div class="google-logo-large">
                            <img :src="googleLarge" alt="google" class="w-[60px]">
                        </div>
                    </div>
                    <div class="relative slides flex flex-1 gap-x-2">
                        <div class="absolute prev text-xl  text-gray top-[50%] left-[-20px]">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>
                        <div class="slide">
                            <UserFeedback />
                        </div>
                        <div class="slide">
                            <UserFeedback />
                        </div>
                        <div class="slide">
                            <UserFeedback />
                        </div>
                        <div class="absolute next text-xl text-gray top-[50%] right-[-20px]"><i
                                class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import UserFeedback from '../../components/UserFeedback.vue';

export default {
    name: 'FeedbacksSection',
    components: {
        UserFeedback
    },
    data() {
        return {
            google: "/images/logo/google.png",
            googleLarge: "/images/logo/google-large.png",
            totalStars: 5,
        };
    },
}
</script>

<style scoped></style>
