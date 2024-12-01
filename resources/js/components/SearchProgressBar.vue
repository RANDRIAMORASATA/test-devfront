<template>
    <div class="flex flex-col items-center justify-center w-full max-w-sm">
        <div class="flex items-center space-x-2 mb-4">
            <div class="w-6 h-6 rounded-full border-2  animate-pulse" :class="{
                'border-blue': isSearching,
                'bg-white': !isSearching,
            }"></div>
            <span class="text-lg font-semibold">
                {{ isSearching ? 'Recherche en cours' : 'Recherche terminée' }}
            </span>
        </div>
        <div class="w-full">
            <div class="relative">
                <div class="h-2 rounded-full bg-gray-200" :style="{ width: progressPercentage + '%' }"></div>
                <div v-if="isSearching" class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                    <span class="text-sm font-semibold text-blue-500">{{ progressPercentage }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchProgressBar",
    data() {
        return {
            progressPercentage: 0,
            isSearching: true,
            intervalId: null
        }
    },
    created() {
        this.startSearchProgress();
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        startSearchProgress() {
            let progress = 0;
            this.intervalId = setInterval(() => {
                if (progress < 100) {
                    progress += 2;
                    this.progressPercentage = progress;
                } else {
                    this.isSearching = false;
                    clearInterval(this.intervalId);
                }
            }, 100);
        },
    },
}
</script>
<style>
.border-blue {
    border: 2px solid var(--secondary);
}
</style>
