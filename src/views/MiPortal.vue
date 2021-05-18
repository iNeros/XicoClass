<template>
  <div class="MiPortal">
      <navbar></navbar>
      <div class="tabs-for-wideview">

      </div>
      <div class="tabs-for-phoneview">

      </div>

      <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
export default {
  name: "MiPortal",
  data() {
    return {};
  },
  components:{
      navbar,
      footerHome
  }
};
</script>

<style scoped></style>
