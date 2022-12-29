<script>
import SideBar from "./SideBar.vue";

export default {
  name: "MainProposals",
  components: {
    SideBar,
  },
};
</script>

<template>
  <main class="main-container">
    <SideBar />
  </main>
</template>

<style>
.main-container {
  min-height: 100vh;
  width: 100%;
}
</style>
