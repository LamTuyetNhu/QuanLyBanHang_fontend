<template>
  <div class="row app__content">
    <div class="col col-2">
      <Menu />
    </div>

    <div class="col col-1"></div>

    <div class="col col-8">
      <div class="home-product">
        <h2 class="allcustomer-list">Cập nhật khách hàng</h2>
        <CustomerFormUpdate
          :Customer="Customer"
          v-if="Customer"
          @submit:Customer="updateCustomer"
        />
      </div>
    </div>

    <div class="col col-1"></div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import CustomerFormUpdate from "@/components/CustomerFormUpdate.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    Menu,
    CustomerFormUpdate,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      Customer: null,
      message: "",
    };
  },
  methods: {
    async getCustomer(id) {
      try {
        this.Customer = await ContactService.getKH(id);
      } catch (error) {
        console.log(error);
        // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1),
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },

    async updateCustomer(data) {
      try {
        alert("Cập nhật thành công!")
        this.$router.push({ name: "Customer" });
        await ContactService.updateKH(data);
      } catch (error) {
        alert("Cập nhật thất bại!")
        this.message = "Khách hàng cập nhật thất bại.";
        console.log(error);
      }
    },
  },

  mounted() {
    this.getCustomer(this.id);
    this.message = "";
  },
};
</script>
