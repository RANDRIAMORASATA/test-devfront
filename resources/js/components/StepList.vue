<template>
    <div class="max-w-xl mx-auto dark:bg-gray-800">
        <div v-for="(step, index) in steps" :key="step.id" class="flex ">
            <div class="mr-4 flex flex-col items-center relative">
                <div>
                    <div class="flex h-10 w-10 items-center justify-center rounded-full" :class="{
                        'border-2 border-transparent bg-primary p-2 color-white': step.completed,
                        'border-2 border-transparent bg-white color-primary bg-none flex  justify-center': !step.completed
                    }">
                        <span class="text-lg font-semibold">{{ step.id }}</span>
                    </div>
                </div>

                <div v-if="index < steps.length - 1"
                    class="absolute top-10 left-1/2 transform -translate-x-1/2  w-px h-connexion-steps  dark:bg-slate-500">
                </div>
            </div>

            <div class="pt-1 pb-8">
                <span class=" title text-gray-800 text-bold ">
                    {{ step.title }}
                </span>
                <span class="text-gray-600 ">{{ step.description }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepList',
    props: {
        steps: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.h-connexion-steps {
    height: 50%;
    width: 2px;
    ;
    background-color: var(--primary);
}

.bg-none {
    padding-right: -10px;
}
</style>
<style>
.color-white {
    color: var(--white);
}

.color-primary {
    color: var(--primary);
}

.title {
    font-weight: bold;
}
</style>
