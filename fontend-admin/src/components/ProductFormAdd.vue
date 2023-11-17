<template>
  <Form id="customerForm" class="update width-50 w3-container">
    <!-- Hiển thị hình ảnh đã chọn -->
    <div v-if="selectedImages.length > 0">
      <label class="update-label">Hình ảnh đã chọn:</label>
      <div class="selected-images-container">
        <div
          v-for="(image, index) in selectedImages"
          :key="index"
          class="selected-image"
        >
          <img
            :src="image.dataUrl"
            alt="Selected Image"
            class="selected-image-preview"
          />
          <button
            @click.prevent="removeImage(index)"
            class="remove-image-button"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>

    <!-- Thêm thuộc tính @change để gọi hàm onFileChange khi chọn ảnh -->
    <p class="form-label">
      <label class="update-label">Tên sản phẩm</label>
      <!-- <Field id="TenHH" class="w3-input" type="text" name="TenHH" required /> -->

      <Field
        id="ten_anh"
        class="w3-input"
        type="file"
        name="ten_anh"
        @change="onFileChange"
        multiple
        required
      />
    </p>

    <!-- <p class="form-label">
      <label class="update-label">Ảnh sản phẩm</label>
      <Field id="ten_anh" class="w3-input" type="file" name="ten_anh" required />
    </p>
    <ErrorMessage name="ten_anh" class="error-feedback" /> -->

    <p class="form-label">
      <label class="update-label">Tên sản phẩm</label>
      <Field id="TenHH" class="w3-input" type="text" name="TenHH" required />
    </p>
    <ErrorMessage name="TenHH" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Giá</label>
      <Field id="Gia" class="w3-input" type="number" name="Gia" required />
    </p>
    <ErrorMessage name="Gia" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Số lượng</label>
      <Field
        id="SoLuongHang"
        class="w3-input"
        type="number"
        name="SoLuongHang"
        required
      />
    </p>
    <ErrorMessage name="SoLuongHang" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Mô tả</label>
      <Field id="MoTaHH" class="w3-input" type="text" name="MoTaHH" required />
    </p>
    <ErrorMessage name="MoTaHH" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Ghi chú</label>
      <Field id="GhiChu" class="w3-input" type="text" name="GhiChu" required />
    </p>
    <ErrorMessage name="GhiChu" class="error-feedback" />

    <div class="allcus-form">
      <button class="allcus-button" type="submit">Thêm</button>
      <button class="allcus-button" type="submit" @click="goToProduct">
        Hủy
      </button>
    </div>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
// Import thư viện vue-multiselect
import Multiselect from "vue-multiselect";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Multiselect, // Thêm Multiselect vào components
  },
  data() {
    return {
      selectedImages: [], // Danh sách các hình ảnh đã chọn
    };
  },
  methods: {
    onFileChange(event) {
      const files = event.target.files;

      // Lặp qua danh sách các tập tin đã chọn và thêm vào mảng selectedImages
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = (e) => {
          // Thêm đối tượng hình ảnh vào mảng selectedImages
          this.selectedImages.push({
            file: files[i],
            dataUrl: e.target.result,
          });
        };

        // Đọc tập tin như là URL dữ liệu
        reader.readAsDataURL(files[i]);
      }
    },
    removeImage(index) {
      this.selectedImages.splice(index, 1);
    },
  },
};
</script>
<!-- 
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  // emits: ["submit:customer", "delete:customer"],
  // props: {
  //   khachhang: { type: Object, required: true },
  // },
  // data() {
  //   const customerFormSchema = yup.object().shape({
  //     username: yup
  //       .string()
  //       .required("Tên phải có giá trị.")
  //       .min(2, "Tên phải ít nhất 2 ký tự.")
  //       .max(50, "Tên có nhiều nhất 50 ký tự."),
  // email: yup
  //   .string()
  //   .email("E-mail không đúng.")
  //   .max(50, "E-mail tối đa 50 ký tự."),
  // address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
  //     address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
  //     password: yup
  //       .string()
  //       .min(6, "Mật khẩu phải có 6 ký tự."),
  //     phone: yup
  //       .string()
  //       .matches(
  //         /((09|03|07|08|05)+([0-9]{8})\b)/g,
  //         "Số điện thoại không hợp lệ."
  //       ),
  //   });
  //   return {
  //     // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
  //     // contactLocal để liên kết với các input trên form
  //     customerLocal: this.khachhang,
  //     customerFormSchema,
  //   };
  // },
  methods: {
    // submitCustomer() {
    //   this.$emit("submit:customer", this.customerLocal);
    // },
    // deleteCustomer() {
    //   this.$emit("delete:customer", this.customerLocal.id);
    // },
    goToProduct() {
      this.$router.push({ name: "Product" });
    },
  },
};
</script> -->
