<template>
  <div id="app">
    <HeaderView />
    <HomeView />
    <FooterView />
  </div>
</template>

<script>
import "./styles/global.css";
import HeaderView from "./components/HeaderView.vue";
import HomeView from "./pages/HomeView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    HeaderView,
    HomeView,
    FooterView,
  },
};
</script>
