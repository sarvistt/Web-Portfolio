<template>
    <div>
    

    <footer class="bg-white/20 rounded-lg shadow-sm  backdrop-blur-lg mb-4">
        <div class="w-full max-w-screen-xl p-4">
            <div class="sm:flex sm:items-center sm:justify-between mb-2">
                <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="../assets/init.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-xl whitespace-nowrap">Site Still Under Construction!</span>
                </div>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="/blog" class="hover:underline me-4 md:me-6">Blog</a>
                    </li>
                    <li>
                        <a href="/projects" class="hover:underline me-4 md:me-6">Projects</a>
                    </li>
                    <li>
                        <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="mailto:sarvist@outlook.com" class="hover:underline">Contact</a> <!-- fix email-->
                    </li>
                </ul>
            </div>
            <hr class="border-gray-200 dark:border-gray-700 my-1" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{currentYear}} Tim Sarvis</span>
        </div>
    </footer>

    </div>
</template>

<script>

export default {
    name: 'Footer',
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>
