<template>
    <div class="w-full max-w-sm p-4 bg-gray-light  rounded-sm shadow-lg">
        <div class="flex items-center space-x-4 mb-4 user-profile">
            <div class="w-12 h-12 rounded-full overflow-hidden ">
                <img :src="user.avatar" alt="profile" class="w-full h-full object-cover">
            </div>
            <div class="user-infos">
                <div class="font-semibold text-xs font-bold ">{{ user.name }}</div>
                <div class="text-gray text-xxs ">{{ user.createdAt }}</div>

            </div>

        </div>
        <div class="flex items-center space-x-1 mt-1 text-lg user-star">
            <span v-for="star in user.rating" :key="star" class="text-yellow-500">
                ★
            </span>
            <span v-for="star in (5 - user.rating)" :key="'empty-' + star" class="text-gray-300">
                ★
            </span>
        </div>
        <div class="text-gray-700 mb-4 user-review">
            <p class="text-xs">{{ isReadMore ? truncatedReview : user.review }}</p>
        </div>

        <a href="#" class="text-gray text-sm font-semibold hover:underline read" @click.prevent="toggleReadMore">
            {{ isReadMore ? 'Read more' : 'Read less' }}
        </a>
    </div>
</template>

<script>
export default {
    name: "UserReview",
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isReadMore: true,
        };
    },
    computed: {
        truncatedReview() {
            return this.user.review.length > 50 ? this.user.review.substring(0, 50) + '...' : this.user.review;
        }
    },
    methods: {
        toggleReadMore() {
            this.isReadMore = !this.isReadMore;
        }
    }
};
</script>

<style scoped>
@media screen and (max-width: 1024px) {

    .user-profile,
    .user-review,
    .user-infos,
    .user-star,
    .read {
        justify-content: center;
        display: flex;
    }

    .user-infos {
        flex-direction: column;
        align-items: center;
    }



}
</style>
<style>
.text-xxs {
    font-size: 8px;
}
</style>
