<script>
import TableRowButton from "./TableRowButton.vue";

export default {
  name: "OrderTableRow",
  components: {
    TableRowButton,
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    formatOrderValue(orderString) {
      return Number(orderString).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
      });
    },
    setOrderStatus(status) {
      switch (status) {
        case "0":
          return "PENDENTE DE CONFIRMAÇÃO";
        case "1":
          return "PEDIDO CONFIRMADO";
        case "2":
          return "NÃO RECONHECE O PEDIDO";
        case "3":
          return "MERCADORIA NÃO RECEBIDA";
        case "4":
          return "RECEBIDA COM AVARIA";
        case "5":
          return "DEVOLVIDA";
        case "6":
          return "RECEBIDA COM DEVOLUÇÃO PARCIAL";
        case "7":
          return "RECEBIDA E CONFIRMADA";
        case "8":
          return "PAGAMENTO AUTORIZADO";
        default:
          return "PENDENTE DE CONFIRMAÇÃO";
      }
    },
  },
  props: [
    "orderNumber",
    "buyer",
    "provider",
    "emissionDate",
    "orderValue",
    "oderStatusBuyer",
  ],
};
</script>

<template>
  <div class="table-row-container">
    <div class="table-row">
      <div
        class="table-row-link-number valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        {{ orderNumber }}
      </div>
      <div
        class="table-row-link-sacado valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        {{ buyer.name }}
      </div>
      <div
        class="table-row-link-cedente valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        {{ provider.name }}
      </div>
      <div
        class="table-row-link-date valign-text-middle dmsans-medium-scarpa-flow-14px"
      >
        {{ formatDate(emissionDate) }}
      </div>
      <div
        class="table-row-link-price valign-text-middle dmsans-medium-persian-green-14px"
      >
        {{ formatOrderValue(orderValue) }}
      </div>
      <div
        class="table-row-link-recebido valign-text-middle dmsans-bold-persian-green-12px"
      >
        {{ setOrderStatus(oderStatusBuyer) }}
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
