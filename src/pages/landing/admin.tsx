import GateToggle from "@/features/gate/set-gate-status/component/gate-toggle";
import { ParkingTable } from "@/features/parking/get-all-parkings/parking-table";
import { Parking } from "@/interfaces/parking";
import { getAll } from "@/services/parking-service";
import { useEffect, useState } from "react";

export default function AdminPage() {

   let [parkings, setParkings] = useState<Parking[]>([])
   let [durations, setDurations] = useState<number[]>([])

   let fetchData = async () => {
        let res = await getAll()
        setParkings(res)
        let durations = res.map(e => {
            let end = e.end? new Date(e.end):new Date()
            return (end.getTime() - new Date(e.start).getTime()) / (1000 * 60 * 60)
        })
        setDurations(durations)
   }

   useEffect(() => {
    fetchData()
   }, [])

  return (
    <main className="container mx-auto p-4 md:p-6">
      <header className="mb-6">
        <h1 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          View all parking entries, including vehicle type, plate number, start time, and end time.
        </p>
        <div className="flex justify-around my-5 gap-5">
            <p><b>Longest Parking Duration: </b>{Math.floor(Math.max(...durations))} Hours</p>
            <p><b>Shortest Parking Duration: </b>{Math.floor(Math.min(...durations))} Hours</p>
            <p><b>Average Parking Duration: </b>{Math.floor(durations.reduce((prev, cur) => prev + cur, 0) / durations.length)} Hours</p>
            <GateToggle />
        </div>
      </header>

      <section aria-label="Parking records">
        <ParkingTable data={parkings} />
      </section>
    </main>
  )
}
