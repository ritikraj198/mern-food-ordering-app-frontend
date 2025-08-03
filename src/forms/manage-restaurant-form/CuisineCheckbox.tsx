import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import type { ControllerRenderProps, FieldValues } from "react-hook-form"; //is just the TypeScript type of the field object you get when you use the render prop inside a <Controller />

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox = ({ cuisine, field }: Props) => {
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          //It marks the checkbox as checked if the field.value array includes the current cuisine
          checked={field.value.includes(cuisine)}
          onCheckedChange={(checked) => {
            if (checked) {
              // field.onChange is your direct line to React Hook Form’s brain —use it to keep everything in sync and singing in harmony.
              // Take the current array of selected values (field.value), add a new value (cuisine) to it, and tell React Hook Form to update the form state with that new array.
              field.onChange([...field.value, cuisine]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckbox;
