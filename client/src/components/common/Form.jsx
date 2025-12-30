import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const Form = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {
  function renderInputsBycomponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        {formControls.map((controlItem, index) => (
          <div key={index} className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {controlItem.label}
            </Label>
            {renderInputsBycomponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button
        type="submit"
        className="mt-6 w-full cursor-pointer h-11 text-base font-semibold"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default Form;
