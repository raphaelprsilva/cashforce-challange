<script>
export default {
  name: "MenuLogo",
  props: ["logo"],
};
</script>

<template>
  <div class="menu-hero">
    <div class="sider-logo">
      <img class="logo" :src="logo" alt="Logo" />
    </div>
  </div>
</template>

<style>
.menu-hero {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.sider-logo {
  height: 80px;
  min-width: 200px;
  position: relative;
}

.logo {
  height: 30px;
  left: 24px;
  position: absolute;
  top: 25px;
  width: 160px;
}
</style>
