import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import EmptyMessage from "@/components/empty-message"
import { Parking } from "@/interfaces/parking"

function formatDate(value: string | undefined) {
  if (!value) return "-"
  try {
    const dt = new Date(value)
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(dt)
  } catch {
    return "-"
  }
}
function getCost(parking: Parking) {

  let duration= Math.floor(((parking.end? new Date(parking.end) : new Date()).getTime() - new Date(parking.start).getTime()) / (1000 * 60 * 60))
  console.log(duration)
  console.log(parking.ParkingType.first)
  console.log(parking.ParkingType.second)
  console.log(parking.ParkingType.third)
  if (duration <= 1) {
    return parking.ParkingType.first
  }else if (duration <= 2) {
    if (parking.ParkingType.second) {
      return parking.ParkingType.first + parking.ParkingType.second
    }else{
      return 2 * parking.ParkingType.first
    }
  } else {

    if (parking.ParkingType.third && parking.ParkingType.second){
      return parking.ParkingType.first + parking.ParkingType.second + (duration - 2) * parking.ParkingType.third
    }else if (parking.ParkingType.second){
      return parking.ParkingType.first * 1 + (duration - 1) * parking.ParkingType.second
    }else {
      return duration * parking.ParkingType.first
    }

  }  

}


export function ParkingTable({ data }: { data: Parking[] }) {
  if (!data || data.length === 0) {
    return (
      <Card>
        <CardContent className="p-0">
            <EmptyMessage title="No parking records" text="Records will appear here once vehicles are parked in the system."/>
        </CardContent>
      </Card>
    )
  }

  const compareDate = (a: Parking, b: Parking) => {
    return new Date(a.start).getTime() - new Date(b.start).getTime()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-pretty">Parking Records</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Vehicle</TableHead>
              <TableHead className="text-center">Plate</TableHead>
              <TableHead className="text-center">Start</TableHead>
              <TableHead className="text-center">End</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.sort(compareDate).map((row) => {
              const isActive = !row.end
              return (
                <TableRow key={row.userid}>
                  <TableCell>{row.ParkingType.vehicletype}</TableCell>
                  <TableCell className="font-medium">{row.userid}</TableCell>
                  <TableCell>{formatDate(row.start)}</TableCell>
                  <TableCell>{formatDate(row.end)}</TableCell>
                  <TableCell>{getCost(row)}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs ${
                        isActive ? "bg-primary/10 text-primary" : "bg-muted text-foreground"
                      }`}
                      aria-label={isActive ? "Active parking" : "Completed parking"}
                    >
                      {isActive ? "Active" : "Completed"}
                    </span>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
