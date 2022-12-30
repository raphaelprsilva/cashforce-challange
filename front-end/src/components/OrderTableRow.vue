<script>
import TableRowButton from "./TableRowButton.vue";

export default {
  name: "OrderTableRow",
  components: {
    TableRowButton,
  },
};
</script>

<template>
  <div class="table-row-container">
    <div class="table-row">
      <div
        class="table-row-link-number valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        1234
      </div>
      <div
        class="table-row-link-sacado valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        SACADO 001
      </div>
      <div
        class="table-row-link-cedente valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        CEDENTE 002
      </div>
      <div
        class="table-row-link-date valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        12/02/2020
      </div>
      <div
        class="table-row-link-price valign-text-middle dmsans-medium-persian-green-14px"
      >
        R$ 49.725,00
      </div>
      <div
        class="table-row-link-recebido valign-text-middle dmsans-bold-persian-green-12px"
      >
        RECEBIDO
      </div>
      <TableRowButton />
    </div>
  </div>
</template>

<style>
.table-row-container {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--mystic);
  border-radius: 6px;
  height: 48px;
  min-width: 1177px;
}

.table-row {
  align-items: center;
  display: flex;
  height: 32px;
  left: 30px;
  min-width: 1139px;
  position: relative;
  top: 8px;
}

.table-row-link-number {
  height: 18px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-width: 30px;
}

.table-row-link-sacado {
  height: 18px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 141px;
  min-width: 86px;
}

.table-row-link-cedente {
  height: 18px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 68px;
  min-width: 94px;
}

.table-row-link-date {
  height: 18px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 50px;
  min-width: 77px;
}

.table-row-link-price {
  height: 18px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 72px;
  min-width: 87px;
}

.table-row-link-recebido {
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 86px;
  min-width: 59px;
  text-align: center;
}

@media screen and (max-width: 1794px) {
  .table-row-container {
    min-width: 1100px;
  }

  .table-row {
    min-width: 1071px;
  }

  .table-row-link-sacado {
    margin-left: 94px;
  }
}
</style>
