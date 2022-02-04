<template>
  <div class="container">
    <h1>Checksheet - Develop Edition</h1>
    <hr />
    <CheckItem001 class="1">1</CheckItem001>
    <CheckItem002 class="2">2</CheckItem002>
    <CheckItem003 class="3">3</CheckItem003>
    <CheckItem004 class="4">4</CheckItem004>
    <CheckItem005 class="5">5</CheckItem005>
    <CheckItem006 class="6">6</CheckItem006>
    <CheckItem007 class="7">7</CheckItem007>
    <CheckItem008 class="8">8</CheckItem008>
  </div>
</template>

<script>
import CheckItem001 from '@/components/CheckItem001.vue'
import CheckItem002 from '@/components/CheckItem002.vue'
import CheckItem003 from '@/components/CheckItem003.vue'
import CheckItem004 from '@/components/CheckItem004.vue'
import CheckItem005 from '@/components/CheckItem005.vue'
import CheckItem006 from '@/components/CheckItem006.vue'
import CheckItem007 from '@/components/CheckItem007.vue'
import CheckItem008 from '@/components/CheckItem008.vue'

export default {
  name:'Checksheet01',
  components: {
    CheckItem001,
    CheckItem002,
    CheckItem003,
    CheckItem004,
    CheckItem005,
    CheckItem006,
    CheckItem007,
    CheckItem008
  }
}

</script>

<style>
</style>