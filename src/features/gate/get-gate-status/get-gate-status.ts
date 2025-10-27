import axios from "axios";

interface Status {
    angle: number
}

export async function getGateStatus() {
    let res = await axios.get<Status>(`${import.meta.env.VITE_GATE_HOST}/status`)
    return res.data.angle !== 0? false: true //kalau bukan 0 maka tidak open
}