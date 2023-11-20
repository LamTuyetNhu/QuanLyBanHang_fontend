<template>
  <div class="row app__content">
    <div class="col col-2">
      <Menu />
    </div>

    <div class="col col-1"></div>

    <div class="col col-8">
      <div class="home-product">
        <h2 class="allcustomer-list app__content">Thêm Đơn hàng</h2>
        <OrderFormAdd :Order="Order" @submit:Order="postOrder" />
      </div>
    </div>

    <div class="col col-1"></div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import OrderFormAdd from "@/components/OrderFormAdd.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    Menu,
    OrderFormAdd,
  },

  data() {
    return {
      Order: {},
      message: "",
    };
  },

  methods: {
    async postcontact(data) {
      try {
        await ContactService.createDH(data);
        this.$router.push({ name: "Order" });
        alert("Thêm thành công!");
      } catch (error) {
        console.log(error);
        alert("Thêm không thành công!");
      }
    },
  },
  created() {
    this.message = "";
  },
};
</script>
