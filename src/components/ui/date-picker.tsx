import { Props } from "@/interfaces/form-prop"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { FieldValues } from "react-hook-form"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { format } from "date-fns"

export default function DatePicker<T extends FieldValues>({control, name, label}:Props<T>){
    return (<FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel>{label}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant={"outline"} className={"w-full pl-3 text-left font-normal text-muted-foreground"}>
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date <= new Date()    
                    }
                    initialFocus
                    className="bg-background"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />)
}