<template>
    <div class="flex flex-row items-center justify-between gap-8 mx-auto w-full mt-[130px] max-h-[250px]">
        <div class="flex-1 flex items-center">
            <span class="text-3xl font-bold font-sf leading-[1.5] tracking-tight text-gray-900 w-[80%]">
                Hi, I'm Tim! 
                <br /> 
                A Full Stack Engineer building
                <transition name="fade" mode="out-in">
                    <span :key="currentIndex" class="gradient-text">
                        {{ changedAdjective }}
                    </span>
                </transition>
                applications using Vue and much more!
            </span>
        </div>
        <div class="flex items-center justify-center ml-11">
            <ProfilePicture />
        </div>
    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue';

export default {
    name: 'Intro',
    data () {
        return {
            listOfAdjectives: ['Amazing', 'Stunning', 'Interesting?', 'Quirky?'],
            currentIndex: 0
        }
    },
    components: {
        ProfilePicture
    },
    computed: {
        changedAdjective() {
            console.log('current index', this.currentIndex)
            return this.listOfAdjectives[this.currentIndex]
        }
    },
    mounted() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.listOfAdjectives.length
        }, 2000)
    }
}
</script>

<style>
.gradient-text {
    background: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient colors */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>