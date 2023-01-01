<script>
import TopHeader from "./TopHeader.vue";
import PageHeader from "./PageHeader.vue";
import OrdersTable from "./OrdersTable.vue";

export default {
  name: "MainContent",
  components: {
    TopHeader,
    PageHeader,
    OrdersTable,
  },
};
</script>

<template>
  <section class="main-section-container">
    <TopHeader />
    <PageHeader />
    <OrdersTable />
  </section>
</template>

<style>
.main-section-container {
  display: flex;
  padding-left: 20rem;
  flex-direction: column;
  min-width: 100%;
  position: fixed;
}
</style>
