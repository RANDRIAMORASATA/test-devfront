<template>
    <div class="flex flex-col items-center justify-center w-full max-w mt-10">
        <div class="flex items-center space-x-2 mb-4 w-full">
            <div class="relative w-5 h-5 rounded-full border-2 border-gray animate-spin" :style="{
                'border-top-color': isSearching ? 'blue' : 'gray',
                'transform': 'rotate(' + (progressPercentage * 3.6) + 'deg)',
            }">

            </div>
            <span class="text-lg font-gray">
                {{ isSearching ? 'Recherche en cours' : 'Recherche terminée' }}
            </span>
        </div>
        <div class="w-full">
            <div class="relative w-full w-full bg-gray h-1">
                <div class="h-1 rounded-full bg-gray-200 w-full w-full">
                    <div :style="{ width: progressPercentage + '%' }" class="w-full h-full bg-blue-500 rounded-full">
                    </div>
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

<style scoped>
.border-blue {
    border: 2px solid var(--secondary);
}
</style>
