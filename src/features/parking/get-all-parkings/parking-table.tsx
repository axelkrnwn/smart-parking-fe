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
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.sort(compareDate).map((row) => {
              const isActive = !row.end
              return (
                <TableRow key={row.userid}>
                  <TableCell>Car</TableCell>
                  <TableCell className="font-medium">{row.userid}</TableCell>
                  <TableCell>{formatDate(row.start)}</TableCell>
                  <TableCell>{formatDate(row.end)}</TableCell>
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
