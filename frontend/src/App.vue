<template>
  <router-view/>
</template>

<script>
import { useThemeSettingsStore } from "@/store/themeSettings";
export default {
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
  }
}
</script>
<style>
.vl-overlay.vl-full-page{
  z-index: 9999999 !important;
}
</style>