<script>
import SideBar from "./SideBar.vue";
import MainContent from "./MainContent.vue";

export default {
  name: "MainProposals",
  components: {
    SideBar,
    MainContent,
  },
};
</script>

<template>
  <main class="main-container">
    <SideBar />
    <MainContent />
  </main>
</template>

<style>
.main-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
</style>
