import createApiClient from "./api.service";

class StaffService {
    constructor(baseUrl = "/api/staffs") {
        this.api = createApiClient(baseUrl);
    }
    /* Nhân Viên*/
    async getAllNV(){
        return (await this.api.get("/")).data;
    }
    async createNV(data){
        return (await this.api.post("/", data)).data;
    }
    async getNV(id){
        return (await this.api.get(`/${id}`)).data;
    }
    async updateNV(id, data){
        return (await this.api.put(`/${id}`, data)).data;
    }
    async deleteNV(id){
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new StaffService();