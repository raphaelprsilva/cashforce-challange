<script>
import MenuLogo from "./MenuLogo.vue";
import MenuItemSelected from "./MenuItemSelected.vue";

export default {
  name: "SideBar",
  components: {
    MenuLogo,
    MenuItemSelected,
  },
};
</script>

<template>
  <aside class="aside-container">
    <MenuLogo />
    <MenuItemSelected />
  </aside>
</template>

<style>
.aside-container {
  align-items: flex-start;
  background: var(--light-gray);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  text-align: center;
  width: 20rem;
}
</style>
