<template>
    <div class="flex flex-row items-center justify-between gap-8 mx-auto w-full mt-[130px] max-h-[200px]" style="min-height: 160px;">
        <div class="flex-1 flex items-center">
            <span class="text-3xl font-extrabold leading-none tracking-tight text-gray-900 font-sf">
                Hi, I'm Tim! 
                <br /> 
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
            listOfAdjectives: ['Amazing', 'Stunning', 'Interesting?', 'Quirky?', 'Definity Sophisticated'],
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
        }, 20000)
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