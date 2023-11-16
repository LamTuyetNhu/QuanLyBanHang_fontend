<template>
  <div class="row app__content">
    <div class="col col-2">
      <Menu />
    </div>

    <div class="col col-1"></div>

    <div class="col col-8">
      <div class="home-product">
        <h2 class="allcustomer-list app__content">Chi Tiết Đơn hàng</h2>
          <OrderFormDetail 
          />
      </div>
    </div>

    <div class="col col-1"></div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
  import OrderFormDetail from "@/components/OrderFormDetail.vue";
  // import ContactService from "@/services/contact.service";
  export default{
      components: {
        Menu,
        OrderFormDetail
},
  }

      // data() {
      //     return {
      //         khachhang: {},
      //         message: "",
      //     };
      // },

      // methods:{
      //     async postcontact(data) {
      //         try{
      //             await ContactService.create(data);
      //             this.message = "Thêm Thành Công";
      //         }catch(error){
      //             console.log(error);
      //         }
      //     }
      // },
      // created() {
      //     this.message = "";
      // },
  // }
</script>