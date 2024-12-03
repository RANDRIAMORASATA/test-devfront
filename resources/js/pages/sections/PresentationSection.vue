<template>

    <section class=" pt-2  presentation-section-container ">
        <div class="bg-white w-full ">
            <div class="oval absolute top-0 right-0 w-[60%] h-full bg-primary rounded-r-[50%]">

            </div>

            <div class=" container w-full flex justify-between">

                <div class=" py-20  presentation-section flex  justify-between z-[1] w-full">
                    <div class="  flex flex-col  space-y-6 w-50">
                        <div class="logo flex items-center">
                            <img :src="logo" alt="logo" class="w-full h-full">
                        </div>

                        <div class="tracking-tighter">
                            <h1 class="text-xl  font-bold ">
                                Test psychotechnique: <span class="">Récupérer </span>
                                <span class="border-b-2 border-primary">votre permis</span>
                            </h1>

                            <span class="text-lg ">Une démarche simple & rapide .</span>
                        </div>


                        <ul class="space-y-4 text-left">
                            <li class=" flex items-center text-lg">
                                <div
                                    class="w-5 h-5  rounded-full flex items-center justify-center border border-green-400 mr-2">
                                    <svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                Test rapide et fiable
                            </li>
                            <li class="flex items-center text-lg">
                                <div
                                    class="w-5 h-5  rounded-full flex items-center justify-center border border-green-400 mr-2">
                                    <svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                Résultats immédiats
                            </li>
                            <li class="flex items-center text-lg">
                                <div
                                    class="w-5 h-5  rounded-full flex items-center justify-center border border-green-400 mr-2">
                                    <svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                Accès 24/7
                            </li>
                        </ul>
                        <div class="flex flex-col justify-center">
                            <Button color="primary" class="]">Je réserve mon test psychotechnique</Button>

                            <p class="text-xs text-gray-500 mt-2  text-center ">Entrainement Gratuit inclu</p>
                        </div>


                        <div class="flex justify-center gap-4">
                            <div class="pt-4">
                                <div class="flex items-center justify-center space-x-2">
                                    <i class="fa-brands fa-google"></i>
                                </div>

                                <div class="flex items-center justify-center space-x-2">
                                    <span class="text-yellow-500 text-bold"><i class="fa-solid fa-star"></i><i
                                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="flex items-center justify-center space-x-2">
                                    <p class="text-xs text-gray-500">4.7 | 8 520 <span class="text-xxs">avis</span></p>
                                </div>

                            </div>
                            <div class="p-4 ">
                                <div class="flex items-center space-x-2">
                                    <span class="text-green-500 text-2xl">★</span>
                                    <span class="text-xs font-semibold">TrustPilot</span>
                                </div>
                                <div class="flex gap-1">
                                    <div class="w-4 h-4 bg-green-500 flex items-center justify-center rounded-sm">
                                        <i class="fa-solid fa-star text-white text-xs"></i>
                                    </div>
                                    <div class="w-4 h-4 bg-green-500 flex items-center justify-center rounded-sm">
                                        <i class="fa-solid fa-star text-white text-xs"></i>
                                    </div>
                                    <div class="w-4 h-4 bg-green-500 flex items-center justify-center rounded-sm">
                                        <i class="fa-solid fa-star text-white text-xs"></i>
                                    </div>
                                    <div class="w-4 h-4 bg-green-500 flex items-center justify-center rounded-sm">
                                        <i class="fa-solid fa-star text-white text-xs"></i>
                                    </div>
                                    <div class="w-4 h-4 bg-gray flex items-center justify-center rounded-sm">
                                        <i class="fa-solid fa-star-half-stroke text-white text-xs"></i>
                                    </div>

                                </div>
                                <span class="text-xs">TrueScore 4.4 | 8 520 avis</span>


                            </div>
                        </div>


                    </div>
                </div>

                <!-- Vidéo -->
                <div class="flex w-full items-center z-[3]">
                    <iframe class="flex-1 w-full  video h-64" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
import Button from '../../components/Button.vue';
export default {
    name: 'PresentationSection',
    components: {
        Button,
    },
    data() {
        return {
            logo: "/images/logo/lorem.jpg",
        };
    },
}
</script>

<style scoped>
.overflow-x-hidden {
    overflow-x: hidden;
}

.logo {
    width: 80px;
    height: 80px;
}

.presentation-section-container {
    background-color: var(--primary);

}

.oval {
    transform: rotate(150deg);
    position: absolute;
    top: -20%;
    right: -20%;
    z-index: 2;
}

.video {
    max-width: 70%;
}


.container {}
</style>
