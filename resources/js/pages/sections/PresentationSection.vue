<template>

    <section class=" pt-2  presentation-section-container ">
        <div class="bg-gray-light-presentation  w-full relative">
            <div
                class="oval absolute top-0 right-0 bg-primary rounded-r-[50%] md:w-[80%] md:h-full md:top-[-20%] md:left-0 md:rounded-full sm:w-[80%] sm:h-64 sm:top-[-30%] sm:left-0 sm:rounded-full sm:transform-none">
            </div>
            <div class="pb-3 pt-10 container-logo  ">
                <div class="container mx-auto ">
                    <div class="logo flex items-center">
                        <img :src="logo" alt="logo" class="w-full h-full">
                    </div>
                </div>

            </div>

            <div class=" container mx-auto  flex justify-between w-full">

                <div class=" pb-6  pt-3 z-[3] presentation-section flex  justify-between  w-full gap-x-12">
                    <div class="  flex flex-col  space-y-6 w-full lg:w:1/2">
                        <div class=" tracking-tighter">
                            <h1 class="text-xl  font-bold ">
                                Test psychotechnique: <span class="">Récupérer </span>
                                <span class="border-b-2 border-primary">votre permis</span>
                            </h1>

                            <span class="text-lg ">Une démarche simple & rapide .</span>
                        </div>
                        <ul class="space-y-4 ">
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
                            <Button color="primary" class="">Je réserve mon test psychotechnique</Button>

                            <p class="text-xs text-gray-500 mt-2  text-center ">Entrainement Gratuit inclu</p>
                        </div>
                        <div class="flex justify-center gap-4">
                            <div class="p-4">
                                <div class="flex items-center justify-center space-x-2">
                                    <img :src="google" alt="google" class="w-[20px]">
                                </div>

                                <div class="flex items-center justify-center space-x-2">
                                    <div class="w-4 h-4  flex items-center justify-center  text-yellow-500 text-bold"><i
                                            class="fa-solid fa-star"></i></div>
                                    <div class="w-4 h-4  flex items-center justify-center  text-yellow-500 text-bold"><i
                                            class="fa-solid fa-star"></i></div>
                                    <div class="w-4 h-4  flex items-center justify-center  text-yellow-500 text-bold"><i
                                            class="fa-solid fa-star"></i></div>
                                    <div class="w-4 h-4  flex items-center justify-center  text-yellow-500 text-bold"><i
                                            class="fa-solid fa-star"></i></div>
                                </div>
                                <div class="flex items-center justify-center space-x-2">
                                    <p class="text-xs text-gray-500">4.7 | 8 520 <span class="text-xxs">avis</span></p>
                                </div>

                            </div>

                            <div class="p-4 ">
                                <div class="flex items-center justify-center space-x-2">
                                    <i class="text-sm fa-solid fa-star color-green"></i>
                                    <span class="text-sm font-semibold">TrustPilot</span>
                                </div>
                                <div class="flex items-center justify-center space-x-2">
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
                                <div class="flex items-center justify-center space-x-2">
                                    <p class="text-xs text-gray-500">TrueScore 4.4 | 8 520 <span
                                            class="text-xxs">avis</span></p>
                                </div>


                            </div>
                        </div>
                    </div>
                    <!-- Vidéo -->
                    <div class="flex w-full lg:w:1/2  z-[3] container-video">
                        <iframe class="flex-1 w-[500px]  video h-[80%]" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>

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
            google: "/images/logo/google.png",
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

ul li {
    font-size: 1rem;
}

.oval {
    width: 100%;
    height: 85vh;
    transform: rotate(140deg);
    position: absolute;
    top: -75%;
    z-index: 2;
    left: 58%;
}

.video {
    max-width: 94%;
}

.text-xxs {
    font-size: 10px;
    line-height: 2px;
}

.color-green {
    color: rgb(116, 228, 78);

}

.bg-gray-light-presentation {
    background-color: var(--accentLight);
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 4px -1px;
}

.logo {
    background-color: #F8F9FB;
    height: 40px;
    width: 80px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

}




@media screen and (max-width: 1024px) {
    .presentation-section {
        flex-direction: column;
        gap: 4rem;
        margin-top: 10vh;
    }


    .video {
        max-width: 100%;
        justify-content: center;
        height: 400px;

    }

    .bg-gray-light-presentation {
        position: relative;
    }

    .container-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        padding-bottom: 1rem;
        padding-top: 1rem;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 4px -1px;
    }

    .bg-gray-light-presentation {
        margin-bottom: 6rem;
    }

    .oval {
        width: 110%;
        height: 350px;
        transform: rotate(-16deg);
        position: absolute;
        top: 65%;
        left: 0;
        z-index: 1;
        border-radius: 50%;
    }


}
</style>
