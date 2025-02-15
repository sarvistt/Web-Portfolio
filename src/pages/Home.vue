<template>
  <div class="bg-background-50">
    <div class="grid grid-cols-5 grid-rows-5 gap-4 px-10 py-4 h-screen">
      <div class="row-span-5 rounded-md">
        <LeftPanel/>
      </div>
      <div class="col-span-4 row-span-5 rounded-md">
        <RightPanel />
      </div>
    </div>
  </div>
</template>

<script>
import LeftPanel from '../components/LeftPanel.vue'
import RightPanel from '../components/RightPanel.vue'

export default {
  name: 'Home',
  data () {
    return {
      tim: 0
    }
  },
  components: {
    LeftPanel,
    RightPanel
  }
}
</script>