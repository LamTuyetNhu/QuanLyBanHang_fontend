import createApiClient from "./api.service";

class ContactService {
    constructor(baseUrl = "/api") {
        this.api = createApiClient(baseUrl);
    }
    /* Khách hàng */
    async getAllKH(){
        return (await this.api.get("/")).data;
    }
    async createKH(data){
        return (await this.api.post("/dang_ky_khach_hang", data)).data;
    }
    async getKH(id){
        return (await this.api.get(`/FindOneCustomer/${id}`)).data;
    }
    async updateKH(id, data){
        // return (await this.api.put(`/customers/${id}`, data)).data;
        try {
            console.log("id: ", id)
            console.log("data: ", data)
            return (await this.api.put(`/customers/${id}`, data)).data;
        } catch (error) {
            throw new Error(`Error updating customer with ID ${id}: ${error.message}`);
        }
    }
    async deleteKH(id){
        return (await this.api.delete(`/customers/${id}`)).data;
    }
}

export default new ContactService();