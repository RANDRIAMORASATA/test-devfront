<template>
    <div class="psychotechnical-section w-full py-4">
        <div class="psychotechnical-steps  py-6">
            <div class="psychotechnical-steps-container">
                <div class="container  mx-auto flex justify-between  gap-x-8">
                    <div class="w-full lg:w-1/2 psychotechnical-image-container pr-6 flex justify-right ">
                        <div class="relative w-full h-auto">
                            <img src="https://fakeimg.pl/300x200/" alt="Image 1" class="w-full h-auto">
                            <img src="https://fakeimg.pl/300/" alt="Image 3"
                                class="absolute top-[15px] right-[-3rem] w-[8rem] h-[8rem] rounded-full image3">

                        </div>
                    </div>
                    <div
                        class="w-full lg:w-1/2 psychotechnical-steps-container pl-6 flex flex-col justify-center items-start">
                        <div class="title text-xl color-primary font-bold text-center mb-6">
                            Votre test psychotechnique en 3 étapes :
                        </div>
                        <StepList :steps="steps" />
                        <Button color="primary" class="mt-4">Je réserve mon test psychotechnique</Button>
                    </div>



                </div>
            </div>
        </div>
        <div class="free-training-section py-10">
            <div class="training-description-container">
                <div class="container  mx-auto flex justify-between  gap-x-8">
                    <div
                        class="w-full lg:w-1/2 psychotechnical-steps-container pl-6 flex flex-col justify-center items-start">
                        <div class="title text-xl color-primary font-bold text-center mb-6">
                            Votre test psychotechnique en 3 étapes :
                        </div>
                        <StepList :steps="steps" />
                        <Button color="primary" class="mt-4">Je réserve mon test psychotechnique</Button>
                    </div>

                    <div class="w-full lg:w-1/2 psychotechnical-image-container pr-6 flex justify-right ">
                        <div class="w-full h-auto">
                            <img src="https://fakeimg.pl/300x200/" alt="Image 4" class="w-full h-auto">

                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>


<script>
import Button from '../../components/Button.vue';
import StepList from '../../components/StepList.vue';
export default {
    name: 'PsychotechnicalSection',
    components: {
        Button,
        StepList,
    },
    data() {
        return {
            image1: "/images/psychotechnical/tel1.jpg",
            image2: "/images/psychotechnical/tel2.jpg",
            image3: "/images/psychotechnical/tel3.jpg",
            image4: "/images/psychotechnical/ordi1.jpg",
            steps: [
                {
                    id: 1,
                    title: 'Réservez en ligne : ',
                    description: 'Choisissez votre créneau horaire et votre psychologue agréé',
                    completed: true
                },
                {
                    id: 2,
                    title: 'Passez votre test : ',
                    description: 'Vous serez accueilli par un de nos psychologues qui vous expliquera le déroulement du test.',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Recevez vos résultats : ',
                    description: 'Vous recevrez vos résultats le jour même de votre test',
                    completed: false
                }
            ]
        };
    }
};
</script>

<style scoped>
@media screen and (max-width: 1024px) {
    .psychotechnical-section .w-full {
        width: 100%;
    }

    .psychotechnical-image-container {
        order: 2;
    }

    .psychotechnical-steps-container {
        order: 1;
        align-items: center;
    }

    .training-description-container .psychotechnical-image-container {
        order: 2;
    }

    .training-description-container .psychotechnical-steps-container {
        order: 1;
    }

    .psychotechnical-image-container {
        margin-top: 3rem !important;
        justify-content: center;
        padding-right: 0 !important;

    }

    img.image3 {
        right: 0;
        left: -2rem;
    }
}

@media screen and (min-width: 1024px) {

    .psychotechnical-steps-container,
    .psychotechnical-image-container {
        order: initial;


    }







}
</style>
