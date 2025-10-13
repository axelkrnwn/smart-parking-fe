import { FileProps } from "@/interfaces/form-prop";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { FieldValues } from "react-hook-form";

export default function FileField<T extends FieldValues>({control, name, label, handlePreview}:FileProps<T>) {
    return (
        <FormField
          control={control}
          name={name}
          render={({ field: { onChange, value, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  value={value?.fileName}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                      if (file) {
                        onChange(file);
                        handlePreview(e);
                      }
                  }}
                  {...fieldProps}
                />
              </FormControl>
              <FormMessage />
              
            </FormItem>
          )}
        />
    )
}