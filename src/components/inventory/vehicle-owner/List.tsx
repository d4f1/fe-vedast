import { Component, useState } from "react"
import VehicleOwnerData from "../../../services/types/vehicle-owner.type"
import React from "react"
import OwnerService from "../../../services/inventory/ownerservice"

type Props = {}
type State = {
    vehicleOwner: Array<VehicleOwnerData>
}

const List: React.FC = () => {
    const [vehicleOwnerData, setVehicleOwner ] = useState<Array<VehicleOwnerData>>([])

    const retrieveVehicleOwner = () => {
        OwnerService.getAll()
            .then((response: any) => {
                    vehicleOwner: response
                })
    }
}

export default List;

