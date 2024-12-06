<template>
    <div class="reservation-section-container bg-gray-light-lg  w-full py-10">
        <div class="container mx-auto">
            <div class="title text-2xl text-primary">Réservez votre test proche de chez vous </div>
            <div class="sub-title text-lg text-primary"> En seulement 3 étapes</div>
            <Search customClass="rounded-custom mb-4 w-full mt-6"></Search>

            <div class="filter-container w-full flex  justify-between pt-4 pb-2 px-4  bg-gray-light rounded-lg gap-6">
                <FilterDropdown label="Filter par mois" filter="Mois" :options="moisOptions" class="w-[20%]" />
                <FilterDropdown label="Filter par jour" filter="Jour" :options="jourOptions" class="w-[20%]"
                    :noBorder="false" />
                <FilterDropdown label="Filter par démi-journée" filter="Demi-journée" :options="demiJourneeOptions"
                    class="w-[20%]" />
                <div class="btns w-[20%] flex flex-col">
                    <button
                        class="bg-dark  font-lato text-white px-6 py-2 font-semibold rounded-lg focus:outline-none mb-1">Filtrer</button>
                    <a href="#" class="text-xxs text-center">Réinitialiser les filtres</a>
                </div>

            </div>
            <div class="none w-full rounded-xl  border-gray-light-full my-3 shadow-md flex">
                <div
                    class=" filtre-mobile fast w-[33.33%] border-gray-light-full p-2 flex flex-col justify-center items-center ">
                    <span class="title text-sm">Le plus rapide</span>
                    <span class="price text-lg">120 €</span>
                </div>
                <div
                    class=" filtre-mobile cheaper w-[33.33%] border-gray-light-full p-2 flex flex-col justify-center items-center ">
                    <span class="title text-sm">Le moins chèr</span>
                    <span class="price text-lg">77 €</span>
                </div>
                <div
                    class=" filtre-mobile highly-demanded w-[33.33%] border-gray-light-full p-2 flex flex-col justify-center items-center ">
                    <span class="title text-sm">Fort démande</span>
                    <span class="price text-lg">77 €</span>
                </div>

            </div>
            <span class="text-xs"> 12 résultats </span>
            <SearchProgressBar />
            <div class="places-reservation w-full flex justify-between">
                <div class="places w-[75%] flex justify-between py-10 flex-col gap-1">
                    <div class="places-item w-full " v-for="(property, index) in properties" :key="index">
                        <PropertyCard :day="property.day" :date="property.date" :address="property.address"
                            :urgentText="property.urgentText" :newPrice="property.newPrice"
                            :oldPrice="property.oldPrice" :availability="property.availability" />


                    </div>
                    <div class="container-btn-see-more none w-full justify-center items-center p-4">
                        <button class="see-more bg-secondary text-white py-1 px-4 rounded hover:bg-green-600 ">Voir
                            plus</button>
                    </div>
                </div>
                <div class="box-tests w-[25%] py-8 px-2">
                    <div class="py-2">
                        <div class="text-sm bg-secondary p-2 text-white "><span>Les tests par ville à Aisne
                                (02)</span>
                        </div>
                        <div class="flex gap-1 border-gray-light-full p-2">
                            <button
                                class="   bg-gray-light font-Nunito text-xs px-2 py-2 font-semibold rounded-xl focus:outline-none mb-1">Château-Thierry</button>
                            <button
                                class="   bg-gray-light font-Nunito text-xs px-2 py-2 font-semibold rounded-xl focus:outline-none mb-1">Saint-Quentin</button>
                        </div>

                    </div>
                    <div class="p-2 flex flex-col items-center justify-center border-gray-light-full relative">
                        <div class="flex flex-col items-center ">
                            <div class="text-green-500 text-3xl mb-2">
                                <i class="fa-regular fa-circle-check"></i>
                            </div>

                            <div class="text-xl font-semibold mb-2">
                                {{ progressData[currentIndex].percentage }}%
                            </div>

                            <div class="text-xs text-gray-600 text-center">
                                {{ progressData[currentIndex].description }}
                            </div>

                            <div class=" flex mt-4 space-x-4">
                                <button @click="prevItem" class="text-gray-500 text-2xl absolute top-[40%] left-[10px]">
                                    <i class="fas fa-chevron-left"></i>
                                </button>

                                <button @click="nextItem"
                                    class="text-gray-500 text-2xl absolute top-[40%] right-[10px]">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full py-2">
                        <RatingCards />
                    </div>
                    <div class="">
                        <img src="https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto" class="w-full rounded-lg">
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>

<script>
import SearchProgressBar from '../../components/SearchProgressBar.vue';
import Button from '../../components/Button.vue';
import Search from '../../components/Search.vue';
import FilterDropdown from '../../components/FilterDropdown.vue';
import PropertyCard from '../../components/PropertyCard.vue';
import RatingCards from '../../components/RatingCards.vue';
export default {
    name: 'ReservationSection',
    components: {
        SearchProgressBar,
        FilterDropdown,
        Button,
        Search,
        PropertyCard,
        RatingCards
    },
    data() {
        return {
            progressData: [
                { percentage: 10, description: 'Taux de réussite à nos tests psychotechniques' },
                { percentage: 25, description: 'Analyse en cours' },
                { percentage: 50, description: 'Phase de développement' },
                { percentage: 75, description: 'Tests finaux' },
                { percentage: 100, description: 'Projet terminé' }
            ],
            currentIndex: 0,
            properties: [
                {
                    day: 'Lundi',
                    date: '4 Nov 2024',
                    address: '50 Avenue D, 20233 Thierry',
                    urgentText: 'Dernière place à cette date',
                    newPrice: '€150',
                    oldPrice: '€200',
                    availability: '3 places disponibles à cette date'
                },
                {
                    day: 'Mardi',
                    date: '5 Nov 2024',
                    address: '30 Boulevard du Commerce, 20234 Paris',
                    urgentText: 'Réservez maintenant !',
                    newPrice: '€120',
                    oldPrice: '€180',
                    availability: '5 places disponibles à cette date'
                },
                {
                    day: 'Mercredi',
                    date: '6 Nov 2024',
                    address: '15 Rue de Paris, 20235 Lyon',
                    urgentText: 'Places limitées',
                    newPrice: '€130',
                    oldPrice: '€170',
                    availability: '2 places disponibles à cette date'
                },
                {
                    day: 'Jeudi',
                    date: '7 Nov 2024',
                    address: '123 Rue de la République, 20236 Marseille',
                    urgentText: 'Dernière chance !',
                    newPrice: '€160',
                    oldPrice: '€220',
                    availability: '4 places disponibles à cette date'
                },
                {
                    day: 'Vendredi',
                    date: '8 Nov 2024',
                    address: '10 Avenue des Champs-Élysées, 20237 Paris',
                    urgentText: 'Réservez avant qu\'il ne soit trop tard',
                    newPrice: '€140',
                    oldPrice: '€190',
                    availability: '3 places disponibles à cette date'
                },
                {
                    day: 'Samedi',
                    date: '9 Nov 2024',
                    address: '22 Rue de la Liberté, 20238 Lyon',
                    urgentText: 'Places limitées',
                    newPrice: '€110',
                    oldPrice: '€160',
                    availability: '5 places disponibles à cette date'
                },
                {
                    day: 'Dimanche',
                    date: '10 Nov 2024',
                    address: '18 Boulevard Saint-Germain, 20239 Paris',
                    urgentText: 'Réservez vite !',
                    newPrice: '€135',
                    oldPrice: '€180',
                    availability: '2 places disponibles à cette date'
                },
                {
                    day: 'Lundi',
                    date: '11 Nov 2024',
                    address: '55 Rue de la Tour, 20240 Marseille',
                    urgentText: 'Dernière place disponible',
                    newPrice: '€145',
                    oldPrice: '€195',
                    availability: '1 place disponible à cette date'
                }
            ],
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
    methods: {
        nextItem() {
            if (this.currentIndex < this.progressData.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        prevItem() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.progressData.length - 1;
            }
        }
    }
}
</script>

<style scoped>
.bg-gray-light-lg {
    background-color: var(--accentLight);
}

.bg-gray-light {
    background-color: var(--accent);
}

.bg-dark {
    background-color: var(--dark);
}

@media screen and (max-width:1024px) {
    .filter-dropdown {
        display: none;
    }

    .btns {
        width: 100%;

        display: flex;
        justify-content: center;
        padding: 5px;
    }

    .btns button {
        background-color: var(--accent);
        color: black;
        font-size: 1.5rem;
        padding: 0;
        margin: 0;
    }

    .btns a {
        display: none;
    }

    .places,
    .box-tests {
        width: 100%;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    .box-tests .text-sm,
    .box-tests .border-gray-light-full {
        display: flex;
        justify-content: center;
    }

    .places-reservation {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .filter-container .none {
        display: block;
    }

    .filtre-mobile:hover {
        background-color: var(--secondary);
        color: white;
        cursor: pointer;
    }

    .container-btn-see-more {
        display: flex;
    }

    .container-btn-see-more button {
        width: 40%;

    }

}
</style>
