<template>
    <div class="filter-dropdown flex items-center justify-center w-full">
        <div class="dropdown-container relative">
            <div :class="[customClass || borderClass
                , 'relative dropdown-input flex justify-between items-center  py-2  cursor-pointer text-gray-600']"
                @click="toggleDropdown">
                <input v-model="selectedValue" :id="filter" :placeholder="` ${label}`"
                    class="dropdown w-3/4 bg-transparent  outline-none" readonly />
                <i class="fas fa-chevron-down dropdown-icon text-gray-600"></i>

            </div>
            <div v-show="isOpen" :class="{
                'border-gray-300': borderColor === 'gray',
                'border-primary': borderColor === 'primary',
                'border-secondary': borderColor === 'secondary',
                'bg-white': background === 'white',
                'bg-primary-light': background === 'primary'
            }" class="absolute top-full left-0 right-0 mt-[1px] bg-white border-gray-transparent  shadow-lg z-10">
                <ul class="list-none p-0 m-0">
                    <li v-for="option in options" :key="option" @click="selectOption(option)"
                        class="px-4 py-2 cursor-pointer hover:bg-gray-light">
                        {{ option }}
                    </li>
                </ul>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "FilterDropdown",
    props: {
        label: {
            type: String,
            required: true,
        },
        filter: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        customClass: {
            type: String,
            default: '',
        },
        borderTopColor: {
            type: String,
            default: 'gray',
        },
        borderBottomColor: {
            type: String,
            default: 'gray',
        },
    },

    computed: {
        borderClass() {
            return {
                'border-gray-light': this.borderTopColor !== 'none' || this.borderBottomColor !== 'none',
                'border-none': this.borderTopColor === 'none' && this.borderBottomColor === 'none',
                [`border-t-${this.borderTopColor}`]: this.borderTopColor !== 'none',
                [`border-b-${this.borderBottomColor}`]: this.borderBottomColor !== 'none',
            };
        },
        dropdownClasses() {
            return {
                'bg-white': this.background === 'white',
                'bg-primary-light': this.background === 'primary'
            };
        }
    },
    data() {
        return {
            selectedValue: "",
            isOpen: false
        };
    },

    dropdownClasses() {
        return {
            'border-none': this.borderTopColor === 'none' && this.borderBottomColor === 'none',
            [`border-t-${this.borderTopColor}`]: this.borderTopColor !== 'none',
            [`border-b-${this.borderBottomColor}`]: this.borderBottomColor !== 'none',
            'bg-white': this.background === 'white',
            'bg-primary-light': this.background === 'primary'
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selectedValue = option;
            this.isOpen = false;
        },
    },
};
</script>

<style>
.bg-none {
    background-color: transparent;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

}

.bg-gray-light {
    background-color: var(--accent);
}

.color-gray-light {
    color: var(--accent);
}

.border-gray-light {
    border-top: 0.1px solid var(--gray);
    border-bottom: 0.1px solid var(--gray);
}

.border-gray-transparent {
    border-left: 0.1px solid var(--accent);
    border-right: 0.1px solid var(--accent);
    border-bottom: 0.1px solid var(--accent);
}
</style>
<style></style>
