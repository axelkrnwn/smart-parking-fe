import axios from "axios";

export async function setGateStatus(open:boolean) {
    return await axios.get(`${import.meta.env.VITE_GATE_HOST}/set?angle=${open?0:90}`)
}