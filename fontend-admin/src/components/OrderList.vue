<template>
  <div class="container-fluid container1">
    <div class="allcustomer">
      <table class="table table-striped table-allcustomer">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody id="myTable">
          <tr v-for="(customer, index) in Customer">
            <td class="allcus-title table-number">{{ index + 1 }}</td>
            <td class="allcus-title">{{ customer.hotenKH }}</td>
            <td class="allcus-title">{{ customer.diachi }}</td>
            <td class="allcus-title">{{ customer.sodt }}</td>
            <td class="allcus-title">
              <div class="allcus-form">
                <router-link
                  :to="{
                    name: 'order.detailOrder',
                    params: { id: customer._id },
                  }"
                >
                  <button class="allcus-button" type="submit"><i class="fa-solid fa-eye"></i></button>
                </router-link>

                <button
                  class="allcus-button"
                  data-toggle="modal"
                  data-target="#myModal1"
                  type="submit"
                  v-if="customer._id"
                  @click="deleteCustomer(customer._id)"
                >
                <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ContactService from "@/services/contact.service";
export default {
  // emits: ["delete:khachhang"],
  props: {
    Customer: { type: Array, default: [] },
  },
  methods: {
    async retrieveContacts() {
      try {
        this.Customer = await ContactService.getAllKH();
        // console.log("sjdfhjkf")
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },
    async deleteCustomer(customerId) {
      if (confirm("Bạn muốn xóa khách hàng này?")) {
        try {
          await ContactService.deleteKH(customerId);
          this.refreshList();
          // this.$router.go(0);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
