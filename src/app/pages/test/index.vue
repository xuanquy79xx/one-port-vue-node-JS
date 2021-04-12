<template>
  <div>
    <h2>ahihih</h2>
    {{ getDataStore }}
    {{ lang.home }}
  </div>
</template>
<script>
export default {
  methods: {
    setDataStore() {
      let storeKey = "_TEST",
        action = "change_title",
        data = "Khúc Xuân Quý";
      this.storeVue(storeKey).dispatch(action, data);
    },
  },
  computed: {
    getDataStore() {
      let storeKey = "_TEST";
      return this.storeVue(storeKey).getters.title;
    },
  },
};
</script>