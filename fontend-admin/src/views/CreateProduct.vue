<template>
  <div class="row app__content">
    <div class="col col-2">
      <Menu />
    </div>

    <div class="col col-1"></div>

    <div class="col col-8">
      <div class="home-product">
        <h2 class="allcustomer-list app__content">Thêm Sản Phẩm</h2>
          <ProductFormAdd 
          :Product="Product"
          @submit:Product="postProduct"
          />
      </div>
    </div>

    <div class="col col-1"></div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
  import ProductFormAdd from "@/components/ProductFormAdd.vue";
  import ContactService from "@/services/contact.service";
  export default{
      components: {
        Menu,
        ProductFormAdd
},

      data() {
          return {
              Product: {},
              message: "",
          };
      },

      methods:{
          async postProduct(data) {
              try{
                alert("1")
                  await ContactService.createSP(data);
                alert("3")
                  this.message = "Thêm Thành Công";
              }catch(error){
                alert("2")
                  console.log(error);
              }
          }
      },
      created() {
          this.message = "";
      },
  }
</script>