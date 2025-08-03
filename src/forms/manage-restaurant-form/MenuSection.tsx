import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    //field is array brought from the useFieldArray, and it represents the current state of the dynamic fields
    control,
    name: "menuItems", //consummates a sacred bond with everything in your form that lives under the menuItems name
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>
          Create your menu and give each item a name and a price
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {/* this will be re - rendered whenever append is used (the below button is clicked) */}
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                removeMenuItem={() => remove(index)} //It will remove the item at that index
              />
            ))}
          </FormItem>
        )}
      />
      {/* append will re-render the whole  field's name that is given in the useFieldArray */}
      <Button type="button" onClick={() => append({ name: "", price: "" })}>
        Add Menu Item
      </Button>
    </div>
  );
};

export default MenuSection;
