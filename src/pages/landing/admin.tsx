import { ParkingTable } from "@/features/parking/get-all-parkings/parking-table";
import { Parking } from "@/interfaces/parking";
import { getAll } from "@/services/parking-service";
import { useEffect, useState } from "react";

export default function AdminPage() {

   let [parkings, setParkings] = useState<Parking[]>([])

   let fetchData = async () => {
    let res = await getAll()
    console.log(res.length)
    setParkings(res)
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
      </header>

      <section aria-label="Parking records">
        <ParkingTable data={parkings} />
      </section>
    </main>
  )
}
