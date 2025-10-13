import { ParkingTable } from "@/features/parking/get-all-parkings/parking-table";
import { useAuth } from "@/hooks/use-auth";
import { Parking } from "@/interfaces/parking";
import { getByUser } from "@/services/parking-service";
import { useEffect, useState } from "react";

export default function UserPage() {

    let auth = useAuth()
    let [parkings, setParkings] = useState<Parking[]>([])

    let fetchData = async () => {
        if (auth?.user){
            let res = await getByUser(auth.user.id)
            setParkings(res)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <main className="container mx-auto p-4 md:p-6">
      <header className="mb-6">
        <h1 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">Your Parking Record</h1>
        <p className="text-muted-foreground mt-1">
          View your parking entries, including vehicle type, plate number, start time, and end time.
        </p>
      </header>

      <section aria-label="Parking records">
        <ParkingTable data={parkings} />
      </section>
    </main>
  )
}
