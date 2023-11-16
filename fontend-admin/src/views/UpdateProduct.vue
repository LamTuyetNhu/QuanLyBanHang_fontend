<template>
  <div class="row app__content">
    <div class="col col-2">
      <Menu />
    </div>

    <div class="col col-1"></div>

    <div class="col col-8">
      <div class="home-product">
        <h2 class="allcustomer-list">Cập Nhật Sản Phẩm</h2>
      <ProductFormUpdate
      />
      </div>
    </div>

    <div class="col col-1"></div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import ProductFormUpdate from "@/components/ProductFormUpdate.vue";
// import ContactService from "@/services/contact.service";
export default {
  components: {
    Menu,
    ProductFormUpdate,
  },
  props: {
    id: { type: String, required: true },
  },
  // data() {
  //   return {
  //     khachhang: null,
  //     message: "",
  //   };
  // },
  // methods: {
  //   async getCustomer(id) {
  //     try {
  //       this.khachhang = await ContactService.get(id);
  //     } catch (error) {
  //       console.log(error);
  //       // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
  //       this.$router.push({
  //         name: "notfound",
  //         params: {
  //           pathMatch: this.$route.path.split("/").slice(1),
  //         },
  //         query: this.$route.query,
  //         hash: this.$route.hash,
  //       });
  //     }
  //   },
  //   async updateCustomer(data) {
  //     try {
  //       await ContactService.update(this.khachhang._id, data);
  //       this.message = "Khách hàng đã được cập nhật thành công.";
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
  // created() {
  //   this.getCustomer(this.id);
  //   this.message = "";
  // },
};
</script>
