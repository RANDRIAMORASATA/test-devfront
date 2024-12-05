<template>
    <PresentationSection />
    <PsychotechnicalSection />
    <FeedbacksSection />
</template>

<script>

import FeedbacksSection from './sections/FeedbacksSection.vue';
import PresentationSection from './sections/PresentationSection.vue';
import PsychotechnicalSection from './sections/PsychotechnicalSection.vue';

export default {
    name: 'LandingPage',
    components: {
        PresentationSection,
        PsychotechnicalSection,
        FeedbacksSection
    },
}
</script>

<style scoped></style>
