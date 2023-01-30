<template>
  <div id="app">
    <HeaderView />
    <router-view path="$router.key" />
    <FooterView />
  </div>
</template>

<script>
import "./styles/global.css";
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
