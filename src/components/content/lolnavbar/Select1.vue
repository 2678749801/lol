<template>
  <div id="select1">
    <div class="select1">
      <select-list-item
        v-for="(item, index) in navbar"
        :key="index"
        :navbar-item="item"
      />
    </div>
  </div>
</template>

<script>
import SelectListItem from "./SelectListItem.vue";
export default {
  components: { SelectListItem },
  name: "Select1",
  props: {
    navbar: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#select1 {
  width: 100%;
  opacity: 0.75;
  background-color: #202020;
}
.select1 {
  display: flex;
  margin-left: 160px;
  width: 57%;
}
</style>