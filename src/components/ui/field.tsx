import { Props } from "@/interfaces/form-prop";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { FieldValues } from "react-hook-form";

export default function Field<T extends FieldValues>({
    control,
    name,
    label,
    placeholder = "",
    type = "text",
  }: Props<T>) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }