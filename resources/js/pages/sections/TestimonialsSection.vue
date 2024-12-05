<template>
    <div class="testimonial-container bg-primary py-16 color-white">
        <div class="container mx-auto flex w-full justify-between gap-x-10">
            <div class="box-testimonial gap-y-3  w-25 flex items-center justify-center flex-col">
                <div class="icon text-xxl text-center">
                    <i class="fa-solid fa-file-pen"></i>
                </div>
                <div class="description">
                    <span class="text-sm text-bold text-justify">Repartez directement avec vos résultats de test
                        psychotechnique</span>
                </div>
            </div>
            <div class="box-testimonial  gap-y-3 w-25 flex items-center justify-center flex-col">
                <div class="icon text-xxl text-center">
                    <i class="fa-regular fa-hand-pointer"></i>
                </div>
                <div class="description">
                    <span class="text-sm text-bold text-justify">Entraînement en ligne pour garantir votre
                        réussite</span>
                </div>
            </div>
            <div class="box-testimonial  gap-y-3 w-25 flex items-center justify-center flex-col">
                <div class="icon text-xxl text-center">
                    <i class="fa-solid fa-check-to-slot"></i>
                </div>
                <div class="description">
                    <span class="text-sm text-bold text-justify">Centre enregistré, psychologues certifiés et à
                        l'écoute</span>
                </div>
            </div>
            <div class="box-testimonial  gap-y-3 w-25 flex items-center justify-center flex-col">
                <div class="icon text-xxl text-center">
                    <i class="fa-regular fa-circle-check"></i>
                </div>
                <div class="description">
                    <span class="text-sm text-bold text-justify">Taux de réussite de 97.8%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TestimonialsSection',
    components: {

    },
}
</script>

<style scoped></style>
<style>
.text-xxl {
    font-size: 3rem;
}
</style>
