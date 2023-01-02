<script>
import MenuLogo from "./MenuLogo.vue";
import MenuItemSelected from "./MenuItemSelected.vue";

export default {
  name: "SideBar",
  components: {
    MenuLogo,
    MenuItemSelected,
  },
  data() {
    return { menuItemData };
  },
};

const menuItemData = {
  frame679: "/assets/images/icon-menu-hands.svg",
  propostas: "Notas fiscais",
};
</script>

<template>
  <aside class="aside-container">
    <MenuLogo logo="/assets/images/cashforce-logo.svg" />
    <MenuItemSelected
      :frame679="menuItemData.frame679"
      :propostas="menuItemData.propostas"
    />
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
