<script>
import OrderTableRow from "./OrderTableRow.vue";

export default {
  name: "OrdersTable",
  components: {
    OrderTableRow,
  },
};
</script>

<template>
  <div class="orders-table-container">
    <div class="tableheader-propostas">
      <div class="table-head-link-container dmsans-bold-gray-chateau-12px">
        <div class="table-head-link-nota-fiscal valign-text-middle">
          Nota Fiscal
        </div>
        <div class="table-head-link-sacado valign-text-middle">Sacado</div>
        <div class="table-head-link-cedente valign-text-middle">Cedente</div>
        <div class="table-head-link-emisso valign-text-middle">Emissão</div>
        <div class="table-head-link-valor valign-text-middle">Valor</div>
        <div class="table-head-link-status valign-text-middle">Status</div>
      </div>
    </div>
    <OrderTableRow />
    <OrderTableRow />
    <OrderTableRow />
  </div>
</template>

<style>
.orders-table-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  left: 336px;
  padding: 2.5rem;
  top: 176px;
  width: fit-content;
}

.tableheader-propostas {
  height: 22px;
  min-width: 1177px;
}

.table-head-link-container {
  align-items: flex-start;
  display: flex;
  left: 30px;
  min-width: 835px;
  position: relative;
  top: 2px;
}

.table-head-link-nota-fiscal {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 77px;
}

.table-head-link-sacado {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 94px;
  min-width: 51px;
}

.table-head-link-cedente {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 103px;
  min-width: 54px;
}

.table-head-link-emisso {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 90px;
  min-width: 53px;
}

.table-head-link-valor {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 98px;
  min-width: 39px;
}

.table-head-link-status {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 132px;
}

@media screen and (max-width: 1794px) {
  .orders-table-container {
    width: 1200px;
  }

  .table-head-link-sacado {
    margin-left: 47px;
  }

  .tableheader-propostas {
    min-width: 1100px;
  }
}
</style>
