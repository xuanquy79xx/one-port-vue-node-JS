<template>
  <div class="header-title" :style="{ '--color-angleSharp' : color }">
    <span class="title-angle-sharp">{{title}}</span>
  </div>
</template>

<script>
export default {
   props: {
    color: {
      type: String,
      default: "#fc4a00"
    },
    title: {
      type: String
    },
  }
};
</script>
<style lang="scss" scoped>
  $color : var(--color-angleSharp);
  .title-angle-sharp {
    display: inline-block;
    position: relative;
    font-weight: bold;
    color: $color;
    padding: 0 0 0 15px;
    font-size: 1.3rem;
    margin-top: 1rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      background: $color;
      top: 0;
      left: 0;
      width: 3px;
      height: 12px;
    }
    &::after{
      width: 12px;
      height: 3px;
    }
  }
</style>