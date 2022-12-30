<script>
export default {
  name: "MenuItemSelected",
  props: ["frame679", "propostas"],
};
</script>

<template>
  <div class="menu-itemselected">
    <div class="menu-item-selected-rectangle">
      <div class="rectangle"></div>
    </div>
    <div class="menu-items-container">
      <img class="menu-item-icon" :src="frame679" alt="Hands Shaking Icon" />
      <div class="menu-item-orders-text">
        <div
          class="propostas-2valign-text-middle dmsans-medium-persian-green-14px"
        >
          {{ propostas }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.menu-item {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 288px;
}

.menu-itemselected {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 21px;
  height: 64px;
  width: fit-content;
}

.menu-item-selected-rectangle {
  align-items: center;
  display: flex;
  gap: 10px;
  margin-bottom: -10px;
  margin-top: -10px;
  padding: 10px 0px;
  width: fit-content;
}

.rectangle {
  background-color: var(--persian-green);
  border-radius: 4px;
  height: 64px;
  min-width: 4px;
}

.menu-items-container {
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  width: fit-content;
}

.menu-item-icon {
  height: 44px;
  min-width: 26px;
  width: 26px;
}

.menu-item-orders-text {
  align-items: center;
  display: flex;
  gap: 10px;
  height: 44px;
  padding: 10px 0px;
  width: fit-content;
}

.propostas-2 {
  letter-spacing: 0;
  line-height: normal;
  width: fit-content;
}
</style>
