<template>
    <PresentationSection />
    <PsychotechnicalSection />
    <FeedbacksSection />
    <TestimonialsSection />
    <AccordionSection />
    <ReservationSection />
</template>

<script>

import AccordionSection from './sections/AccordionSection.vue';
import FeedbacksSection from './sections/FeedbacksSection.vue';
import PresentationSection from './sections/PresentationSection.vue';
import PsychotechnicalSection from './sections/PsychotechnicalSection.vue';
import TestimonialsSection from './sections/TestimonialsSection.vue';
import ReservationSection from './sections/ReservationSection.vue';

export default {
    name: 'LandingPage',
    components: {
        PresentationSection,
        PsychotechnicalSection,
        FeedbacksSection,
        TestimonialsSection,
        AccordionSection,
        ReservationSection
    },
}
</script>

<style scoped></style>
