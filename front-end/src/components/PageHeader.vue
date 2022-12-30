<script>
export default {
  name: "PageHeader",
};
</script>

<template>
  <section class="page-header-container">
    <div class="page-header-items-container">
      <div class="order-items-container">
        <img
          class="icon-menu-proposal"
          src="../assets/images/icon-menu-proposta.svg"
          alt="Proposals Menu Icon"
        />
        <h1 class="proposals">Notas fiscais</h1>
      </div>
      <p class="visualize-as-propost">
        Visualize as notas fiscais que você tem.
      </p>
    </div>
  </section>
</template>

<style>
.page-header-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 9px;
  left: 336px;
  padding: 2.5rem;
  top: 104px;
  width: fit-content;
}

.page-header-items-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
}

.order-items-container {
  align-items: center;
  display: flex;
  gap: 9px;
  width: fit-content;
}

.icon-menu-proposal {
  height: 24px;
  min-width: 24px;
}

.proposals {
  color: #021b51;
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
  width: fit-content;
}

.visualize-as-propost {
  color: var(--slate-gray);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
  width: fit-content;
}
</style>
