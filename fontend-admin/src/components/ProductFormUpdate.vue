<template>
  <Form
    id="customerForm"
    class="update width-50 w3-container"
    @submit="submitProduct"
    :validation-schema="customerFormSchema"
  >
    <p class="form-label">
      <label class="update-label">Tên sản phẩm</label>
      <Field
        id="TenHH"
        class="w3-input"
        type="text"
        name="TenHH"
        v-model="customerLocal.TenHH"
        required
      />
    </p>
    <ErrorMessage name="TenHH" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Giá</label>
      <Field
        id="Gia"
        class="w3-input"
        type="text"
        name="Gia"
        v-model="customerLocal.Gia"
        required
      />
    </p>
    <ErrorMessage name="Gia" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Số lượng</label>
      <Field
        id="SoLuongHang"
        class="w3-input"
        type="text"
        name="SoLuongHang"
        v-model="customerLocal.SoLuongHang"
        required
      />
    </p>
    <ErrorMessage name="SoLuongHang" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Mô tả</label>
      <Field
        id="MoTaHH"
        class="w3-input"
        type="text"
        name="MoTaHH"
        v-model="customerLocal.MoTaHH"
        required
      />
    </p>
    <ErrorMessage name="MoTaHH" class="error-feedback" />

    <p class="form-label">
      <label class="update-label">Ghi chú</label>
      <Field
        id="GhiChu"
        class="w3-input"
        type="text"
        name="GhiChu"
        v-model="customerLocal.GhiChu"
        required
      />
    </p>
    <ErrorMessage name="GhiChu" class="error-feedback" />

    <div class="allcus-form">
      <button class="allcus-button" type="submit">Cập nhật</button>
      <button class="allcus-button" type="submit" @click="goToProduct">
        Hủy
      </button>
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:Product"],
  props: {
    Product: { type: Object, required: true },
  },
  data() {
    const customerFormSchema = yup.object().shape({
      TenHH: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      SoLuongHang: yup
        .number()
        .integer("Số lượng phải là số nguyên.")
        .min(1, "Số lượng phải lớn hơn hoặc bằng 1."),
      Gia: yup
        .number()
        .min(0, "Giá phải lớn hơn hoặc bằng 0.")
        .required("Giá phải có giá trị."),
      MoTaHH: yup.string().max(2000, "Mô tả không được vượt quá 255 ký tự."),
      GhiChu: yup.string().max(2000, "Ghi chú không được vượt quá 255 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các input trên form
      customerLocal: this.Product,
      customerFormSchema,
    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:Product", this.customerLocal);
    },
    goToProduct() {
      this.$router.push({ name: "Product" });
    },
  },
};
</script>
