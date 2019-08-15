<template>
  <transition name="e8-zoom-in-center">
    <div class="e8__tag" :class="'e8__tag--'+color">
      <span class="e8__tag--desc"><slot></slot></span>
      <i class="e8-icon-close2 e8__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'E8Tag',
    props: {
      closable: Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
