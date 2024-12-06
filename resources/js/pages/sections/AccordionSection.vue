<template>
    <div class="w-full  container mx-auto mt-10 mb-20">
        <h2 class="text-2xl  text-left mb-6 text-secondary text-bold">Préparez votre test psychotechnique</h2>

        <div class="space-y-4 shadow-lg rounded-lg py-10 px-20">
            <div v-for="(item, index) in accordionItems" :key="index">
                <div class="bg-white ">
                    <button @click="toggleAccordion(index)"
                        class="w-full text-left  py-3  hover:bg-gray-200  focus:outline-none flex justify-between items-center text-gray-200 shadow-bow-bottom">
                        <span class=" text-lg  text-gray-200">{{ item.title }}</span>
                        <i v-if="isOpen(index)" class="fa fa-minus  text-gray-200"></i>
                        <i v-else class="fa fa-plus  text-gray"></i>
                    </button>
                    <div v-show="isOpen(index)" class="px-4 py-3 text-gray-200">
                        <p>{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccordionSection',
    data() {
        return {
            accordionItems: [
                {
                    title: "Qu'est-ce qu'un test psychotechnique ?",
                    content:
                        "Un test psychotechnique est une évaluation des aptitudes cognitives et comportementales, souvent utilisée pour valider ou reprendre un permis de conduire."
                },
                {
                    title: 'Quels sont les documents nécessaires ?',
                    content:
                        "Les documents incluent une pièce d'identité, votre courrier d'annulation de permis, et votre attestation d'inscription."
                },
                {
                    title: 'Combien de temps dure le test ?',
                    content:
                        "Le test dure en moyenne 45 minutes, incluant des exercices et des discussions avec un psychologue agréé."
                }
            ],
            openIndex: null,
        };
    },
    methods: {
        toggleAccordion(index) {
            this.openIndex = this.openIndex === index ? null : index;
        },
        isOpen(index) {
            return this.openIndex === index;
        }
    }
};
</script>

<style scoped></style>
<style>
.border-bottom-gray-light {
    border-bottom: var(--accent);
}

.text-secondary {
    color: var(--secondary);
}
</style>
