import Api from "../../config/Api";
import VehicleOwnerData from "../types/vehicle-owner.type";
const getAll = () => {
    return Api.get<Array<VehicleOwnerData>>("/vehicle-owner")
}


const OwnerService = {
    getAll
}

export default OwnerService;