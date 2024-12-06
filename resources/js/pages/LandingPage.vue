<template>
    <PresentationSection />
    <PsychotechnicalSection />
    <FeedbacksSection />
    <TestimonialsSection />
    <AccordionSection />
    <ReservationSection />
    <Footer/>
</template>

<script>

import AccordionSection from './sections/AccordionSection.vue';
import FeedbacksSection from './sections/FeedbacksSection.vue';
import PresentationSection from './sections/PresentationSection.vue';
import PsychotechnicalSection from './sections/PsychotechnicalSection.vue';
import TestimonialsSection from './sections/TestimonialsSection.vue';
import ReservationSection from './sections/ReservationSection.vue';
import Footer from './sections/Footer.vue';

export default {
    name: 'LandingPage',
    components: {
        PresentationSection,
        PsychotechnicalSection,
        FeedbacksSection,
        TestimonialsSection,
        AccordionSection,
        ReservationSection,
        Footer
    },
}
</script>

<style scoped></style>
