<template>
    <PresentationSection />
    <PsychotechnicalSection />
    <FeedbacksSection />
    <TestimonialsSection />
</template>

<script>

import FeedbacksSection from './sections/FeedbacksSection.vue';
import PresentationSection from './sections/PresentationSection.vue';
import PsychotechnicalSection from './sections/PsychotechnicalSection.vue';
import TestimonialsSection from './sections/TestimonialsSection.vue';

export default {
    name: 'LandingPage',
    components: {
        PresentationSection,
        PsychotechnicalSection,
        FeedbacksSection,
        TestimonialsSection
    },
}
</script>

<style scoped></style>
