<template>
  <div class="d-flex justify-content-center align-items-center mt-3">
    <div
      :class="current > 1 ? 'cursor' : ''"
      @click="current > 1 ? current-- : null"
    >
      <font-awesome-icon
        icon="long-arrow-alt-left"
        size="2x"
        :class="
          current === 1
            ? darkMode
              ? 'text-muted-dark'
              : 'text-muted-light'
            : 'text-primary'
        "
      />
    </div>
    <span class="mx-3">Page {{ current }} of {{ pagesTotal }}</span>
    <div
      :class="current < pagesTotal ? 'cursor' : ''"
      @click="current < pagesTotal ? current++ : null"
    >
      <font-awesome-icon
        icon="long-arrow-alt-right"
        size="2x"
        :class="
          current === pagesTotal
            ? darkMode
              ? 'text-muted-dark'
              : 'text-muted-light'
            : 'text-primary'
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, PropSync } from "vue-property-decorator";
import { vxm } from "@/store";

@Component({
  components: {}
})
export default class TablePagination extends Vue {
  @PropSync("currentPage", { type: Number }) current!: number;
  @PropSync("rowCount", { type: Number }) count!: number;
  @Prop({ default: 25 }) perPage!: number;

  get pagesTotal() {
    return Math.ceil(this.count / this.perPage);
  }

  get darkMode() {
    return vxm.general.darkMode;
  }
}
</script>

<style lang="scss"></style>
