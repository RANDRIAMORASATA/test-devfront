<template>
    <div class="w-full max-w-sm p-4 bg-gray-light  rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-4">
            <div class="w-12 h-12 rounded-full overflow-hidden">
                <img :src="user.avatar" alt="User Avatar" class="w-full h-full object-cover">
            </div>
            <div>
                <div class="font-semibold text-xs font-bold">{{ user.name }}</div>
                <div class="font-gray text-xs">{{ user.createdAt }}</div>

            </div>

        </div>
        <div class="flex items-center space-x-1 mt-1 text-lg">
            <span v-for="star in totalStars" :key="star" class="text-yellow-500">
                ★
            </span>
            <span v-for="star in (5 - totalStars)" :key="'empty-' + star" class="text-gray-300">
                ★
            </span>
        </div>

        <div class="text-gray-700 mb-4">
            <p v-if="isReadMore" class="text-xs">{{ truncatedMessage }}</p>
            <p v-else class="text-xs">{{ user.message }}</p>
        </div>

        <a href="#" class="text-gray text-sm font-semibold hover:underline" @click.prevent="toggleReadMore">
            {{ isReadMore ? 'Read more' : 'Read less' }}
        </a>
    </div>
</template>

<script>
export default {
    name: "UserReview",
    data() {
        return {
            isReadMore: true,
            user: {
                name: "John Doe",
                avatar: "/images/avatar.jpg",
                rating: 3,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate tortor ac lorem dictum, a posuere odio vehicula. Donec pharetra nulla sed cursus elementum. Curabitur euismod tincidunt ligula, vitae vulputate purus feugiat vitae. Integer a leo ligula.",
                createdAt: "02 sept 2025",
            }
        };
    },
    computed: {
        totalStars() {
            return this.user.rating;
        },
        truncatedMessage() {
            return this.user.message.substring(0, 100) + '...';
        }
    },
    methods: {
        toggleReadMore() {
            this.isReadMore = !this.isReadMore;
        }
    }
};
</script>

<style scoped></style>
