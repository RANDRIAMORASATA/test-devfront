<template>
    <div class="feed-back-section bg-gray-light">
        <div class="container mx-auto flex flex-col">
            <div class="title text-primary text-xl pt-10">Ce qu'en pense nos candidats</div>
            <div class="container-feedbacks py-10 w-full">
                <div class="container-slider flex-1 flex bg-white p-10 gap-x-6 relative  rounded-lg">

                    <div class="google-feedback flex flex-col justify-center items-center pr-4 pl-4">
                        <div class="title">Exellent</div>
                        <div class="stars flex">
                            <span v-for="star in 5" :key="'star-' + star" class="text-2xl">
                                <span v-if="star <= totalStars" class="text-yellow-500">★</span>
                                <span v-else class="text-yellow-500">★</span>
                            </span>
                        </div>
                        <div class="">
                            <span class="text-xs">Based on</span>
                            <span class="text-xs font-bold underline text-black">414 reviews</span>
                        </div>
                        <div class="google-logo-large w-[8rem] relative">
                            <img :src="googleLarge" alt="google" class="absolute top-[-3rem]">
                        </div>
                    </div>
                    <div class="relative slides flex flex-1 gap-x-2">
                        <div @click="moveSlide(-1)"
                            class="absolute prev text-sm text-accent top-[50%] left-[-25px] cursor-pointer">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>


                        <div v-for="(review, index) in visibleReviews" :key="index" class="slide">
                            <UserFeedback :user="review" />
                        </div>

                        <div @click="moveSlide(1)"
                            class="absolute next text-sm text-accent top-[50%] right-[-25px] cursor-pointer">
                            <i class="fa-solid fa-angle-right"></i>
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
            googleLarge: "/images/logo/google-large.png",
            reviews: [],
            currentIndex: 0,
            windowWidth: window.innerWidth,
        };
    },
    computed: {
        visibleReviews() {
            const reviewsPerPage = this.windowWidth <= 1024 ? 1 : 3;
            return this.reviews.slice(this.currentIndex, this.currentIndex + reviewsPerPage);
        }
    },
    methods: {
        moveSlide(direction) {
            this.currentIndex += direction;
            if (this.currentIndex < 0) {
                this.currentIndex = this.reviews.length - 1;
            } else if (this.currentIndex >= this.reviews.length) {
                this.currentIndex = 0;
            }
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);

        fetch('/reviews.json')
            .then(response => response.json())
            .then(data => {
                this.reviews = data;
            })
            .catch(error => console.error('Erreur de chargement des avis:', error));
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<style scoped>
.container-slider {
    position: relative;
}

.prev,
.next {
    top: 50%;
    position: absolute;
    cursor: pointer;
    font-size: 2rem;
    color: gray;
}

.next,
.prev {
    right: -25px;
}

.slide {
    width: 100%;
}

@media screen and (max-width:1024px) {


    .next,
    .prev {
        font-size: 1rem;
    }

    .container-slider .google-feedback {
        display: none;
    }

}
</style>
