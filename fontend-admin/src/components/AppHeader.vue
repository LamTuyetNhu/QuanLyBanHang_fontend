<template>
  <header>
    <div class="logo" @click="goToCustomer">
      <img class="logo-img" src="/logo.png" />
      <div class="logo-content">Quản lý bán hàng</div>
    </div>

    <div class="flex">
      <div class="username">
        {{ user.name }}
      </div>
      <div class="logout" @click="logout">
        <i class="fa fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Admin",
      },
    };
  },

  methods: {
    goToCustomer() {
      this.$router.push({ name: "Customer" });
    },
    logout() {
      // this.$router.push({ name: "Customer" });
    },
  },
};
</script>
