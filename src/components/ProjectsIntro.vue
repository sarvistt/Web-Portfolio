<template>
    <div>
        <span>
            Check out what I've been working on!
        </span>
        <div class="grid grid-cols-4 grid-rows-4 gap-4">
            <div class="col-span-2 row-span-2">
                <ProjectCard
                    title="Project 1"
                    description="This is a description of project 1."
                    imageUrl="https://via.placeholder.com/150"
                    link="https://example.com/project1"
                />
            </div>
            <div class="col-span-2 row-span-2 col-start-3">2</div>
            <div class="col-span-2 row-span-2 row-start-3">3</div>
            <div class="col-span-2 row-span-2 col-start-3 row-start-3">4</div>
        </div>
    
        
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
    name: 'Project',
    components: {
        ProjectCard,
    },
}
</script>

