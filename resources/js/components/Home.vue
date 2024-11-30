<template>
    <div class="container mx-auto p-4">
        <h1 class="font-lato text-primary mb-4">HOME</h1>
        <p class="font-sans mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis eius et nobis labore assumenda, quo
            exercitationem sunt similique eligendi? Officiis corporis totam, cumque voluptates asperiores sed. Saepe sit
            illum totam?
        </p>

        <Button color="primary" class="mb-4">Je réserve mon test psychotechnique</Button>
        <Button color="dark" class="mb-4">Filter</Button>

        <Search customClass="rounded-custom mb-4 mb-6"></Search>

        <div class="flex gap-60 mt-9 mb-9">
            <FilterDropdown label="Filter par mois" filter="Mois" :options="moisOptions" class="w-full" />
            <FilterDropdown label="Filter par jour" filter="Jour" :options="jourOptions" class="w-full"
                :noBorder="false" />
            <FilterDropdown label="Filter par démi-journée" filter="Demi-journée" :options="demiJourneeOptions"
                class="w-full" />
        </div>
        <FilterDropdown customClass="bg-none" label="Choisir un département" filter="Departement" :options="departement"
            class="w-full" />
    </div>
</template>

<script>
import Button from './Button.vue';
import FilterDropdown from './FilterDropdown.vue';
import Search from './Search.vue';

export default {
    name: 'Home',
    components: {
        Button,
        FilterDropdown,
        Search,
    },
    data() {
        return {
            moisOptions: [
                'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
            ],
            jourOptions: [
                'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'
            ],
            demiJourneeOptions: [
                'Matin', 'Après-midi'
            ], departement: [
                'Departement 1', 'Departement 2', 'Departement 3', 'Departement 4'
            ]
        };
    },
};
</script>

<style scoped></style>
