<script>
export default {
  name: "TableRowButton",
};
</script>

<template>
  <div class="botoes-principais">
    <div
      class="dados-do-cedente valign-text-middle dmsans-bold-slate-gray-12px"
    >
      Dados do cedente
    </div>
  </div>
</template>

<style>
.botoes-principais {
  align-items: center;
  border: 1px solid;
  border-color: var(--periwinkle);
  border-radius: 24px;
  display: flex;
  margin-left: 97px;
  padding: 8px 29px;
  width: fit-content;
  cursor: pointer;
}

.dados-do-cedente {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  width: fit-content;
}
</style>
