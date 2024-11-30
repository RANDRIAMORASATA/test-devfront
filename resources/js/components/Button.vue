<template>
    <button
        :class="['btn', buttonClass, customClass, 'relative pl-10 pr-10 font-lato text-white px-6 py-3 font-semibold rounded-lg focus:outline-none']"
        type="button">
        <slot>{{ text }}</slot>
        <i v-if="showIcon" class="fa-solid fa-chevron-right absolute"></i>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'primary'
        },
        customClass: {
            type: String,
            default: ''
        },
        showIcon: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        buttonClass() {
            return `bg-${this.color}`;
        }
    }

};
</script>

<style>
.btn {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
}


.btn:hover {
    background-color: darken(var(--primary), 10%);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
    color: var(--accent);
}

.btn i {
    right: 1.5rem;

}

.btn-primary {
    height: 76px;
}
</style>
<style scoped>
.bg-primary {
    background-color: var(--primary);
    height: 76px;
}

.bg-secondary {
    background-color: var(--secondary);
}

.bg-accent {
    background-color: var(--accent);
}

.bg-dark {
    background-color: var(--dark);
}


</style>
