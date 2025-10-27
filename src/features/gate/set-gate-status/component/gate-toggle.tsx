import { useEffect, useState } from "react";
import { getGateStatus } from "../../get-gate-status/get-gate-status";
import { setGateStatus } from "../api/set-gate-status";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label";

export default function GateToggle() {


    let [status, setStatus] = useState<boolean>(false)

    useEffect(() => {
        getGateStatus().then(e => 
            setStatus(e)
        )
    }, [status])

    const controlGate = async () => {
        setStatus(!status)
        setGateStatus(!status)
    }

    return <div className="flex items-center space-x-2 w-50">
      <Switch id="open-gate" onClick={controlGate}/>
      <Label htmlFor="open-gate">Open gate</Label>
    </div>



}