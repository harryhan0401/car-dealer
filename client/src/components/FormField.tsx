import React, { Ref, useEffect } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
  useFieldArray,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Switch } from "@/components/ui/switch";
import { Edit, X, Plus } from "lucide-react";
import { registerPlugin } from "filepond";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface FormFieldProps {
  name: string;
  label?: string;
  type?:
    | "text"
    | "email"
    | "textarea"
    | "number"
    | "select"
    | "radio"
    | "switch"
    | "password"
    | "file"
    | "multi-input"
    | "placesAutocomplete"
    | "hidden";
  placeholder?: string;
  options?: TOption[];
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: string;
  disabled?: boolean;
  multiple?: boolean;
  isIcon?: boolean;
  initialValue?: string | number | boolean | string[];
  stylePanelLayout?:
    | "circle"
    | "integrated"
    | "compact"
    | "integrated circle"
    | "compact circle";
  filePondLabelIdle?: string;
  isOptionalPhotoField?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export const CustomFormField = ({
  name,
  label,
  type = "text",
  placeholder,
  options,
  className,
  inputClassName,
  labelClassName,
  disabled = false,
  multiple = false,
  isIcon = false,
  initialValue,
  stylePanelLayout = "integrated",
  filePondLabelIdle,
  isOptionalPhotoField = false,
  ref,
}: FormFieldProps) => {
  const { control, trigger, watch, clearErrors } = useFormContext();

  if (isOptionalPhotoField) {
    const value = watch(name); // Watch for value changes
    useEffect(() => {
      if (name.includes("optionalPhoto")) {
        if (value && value.length == 0) clearErrors("photo");
      }
    }, [value, name, trigger]); // Runs whenever `value` or `name` changes
  }

  const renderFormControl = (
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            placeholder={placeholder}
            {...field}
            rows={3}
            className={`border-gray-200 p-4 resize-none ${inputClassName}`}
          />
        );
      case "select":
        return (
          <Select
            value={field.value || (initialValue as string)}
            defaultValue={field.value || (initialValue as string)}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              className={`w-full border-gray-200 p-4 ${inputClassName}`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="w-full border-gray-200 shadow">
              {options?.map(({ value, label }) => (
                <SelectItem
                  key={value}
                  value={value}
                  className={`cursor-pointer hover:!bg-gray-100`}
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "radio":
        return (
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="flex flex-col space-y-1"
          >
            {options?.map(({ value, label }) => (
              <FormItem
                key={value}
                className="flex items-center space-x-3 space-y-0"
              >
                <FormControl>
                  <RadioGroupItem value={value} />
                </FormControl>
                <FormLabel className="font-normal">{label}</FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        );
      case "switch":
        return (
          <div className="flex items-center space-x-2">
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              id={name}
              className={` ${inputClassName}`}
            />
            <FormLabel htmlFor={name} className={labelClassName}>
              {label}
            </FormLabel>
          </div>
        );
      case "file":
        return (
          <FilePond
            className={`${inputClassName}`}
            files={field.value}
            onupdatefiles={(fileItems) => {
              const files = fileItems.map((fileItem) => fileItem.file);
              field.onChange(files);
            }}
            stylePanelLayout={stylePanelLayout}
            acceptedFileTypes={["image/*"]}
            allowMultiple={multiple}
            labelIdle={filePondLabelIdle}
            allowImageExifOrientation={true}
            credits={false}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            placeholder={placeholder}
            {...field}
            className={`border-gray-200 p-4 ${inputClassName}`}
            disabled={disabled}
          />
        );
      case "multi-input":
        return (
          <MultiInputField
            name={name}
            control={control}
            placeholder={placeholder}
            inputClassName={inputClassName}
          />
        );
      case "placesAutocomplete":
        return (
          <Input
            type="text"
            placeholder={placeholder}
            {...field}
            ref={ref}
            className={`border-gray-200 p-4 ${inputClassName}`}
            disabled={disabled}
          />
        );
      default:
        return (
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            className={`border-gray-200 p-4 ${inputClassName}`}
            disabled={disabled}
          />
        );
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={initialValue}
      render={({ field }) => (
        <FormItem
          className={`${
            type !== "switch" && "rounded-md"
          } relative ${className}`}
        >
          {type !== "switch" && type !== "file" && (
            <div className="flex justify-between items-center">
              <FormLabel
                className={`text-sm ${labelClassName}`}
                asChild={type === "select" || type === "radio"}
              >
                {type === "select" || type === "radio" ? (
                  <legend>{label}</legend>
                ) : (
                  label
                )}
              </FormLabel>

              {!disabled && isIcon && type !== "multi-input" && (
                <Edit className="size-4" />
              )}
            </div>
          )}
          <FormControl>
            {renderFormControl({
              ...field,
              value: field.value !== undefined ? field.value : initialValue,
            })}
          </FormControl>
          <FormMessage
            className={` ${type == "file" && "absolute bottom-[-14rem] right-[-39rem]"} text-red-400`}
          />
        </FormItem>
      )}
    />
  );
};
interface MultiInputFieldProps {
  name: string;
  control: any;
  placeholder?: string;
  inputClassName?: string;
}

const MultiInputField: React.FC<MultiInputFieldProps> = ({
  name,
  control,
  placeholder,
  inputClassName,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="space-y-2">
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center space-x-2">
          <FormField
            control={control}
            name={`${name}.${index}`}
            render={({ field }) => (
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  className={`flex-1 border-none bg-customgreys-darkGrey p-4 ${inputClassName}`}
                />
              </FormControl>
            )}
          />
          <Button
            type="button"
            onClick={() => remove(index)}
            variant="ghost"
            size="icon"
            className=""
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append("")}
        variant="outline"
        size="sm"
        className="mt-2 "
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Item
      </Button>
    </div>
  );
};
