"use client";

import { useAuth } from "@clerk/nextjs";
import { Controller, useForm } from "react-hook-form";

import { Viewer } from "@/components/Viewer";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import { useMaterials } from "@/hooks/useMaterials";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Label } from "@/ui/Label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/Select";

type FormData = {
  address: string;
  file: FileList;
  material: string;
  name: string;
  paymentMethod: string;
  phoneNumber: string;
};

export default function DashboardPage() {
  const { getToken } = useAuth();
  const { data: materials, isPending: isPendingMaterials } = useMaterials({});
  const { isPending: isPendingCreateOrder, mutate: createOrder } =
    useCreateOrder({
      onError: () => {
        alert("Oops, something went wrong!");
      },
      onSuccess: (data) => {
        alert("Success, check console");
        console.log(data);
      },
    });

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    const token = await getToken();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("paymentMethod", data.paymentMethod);
    formData.append("material", data.material);
    formData.append("file", data.file[0]!);

    if (token) createOrder({ formData, token });
  }

  const file = watch("file")?.[0];
  return (
    <div className="p-4">
      <p className="mt-2 mb-4 text-center text-2xl text-white">
        Create an order
      </p>
      <div className="flex gap-8">
        <form
          className="flex w-1/2 flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <Label className="text-white">Full Name</Label>
            <Input
              placeholder="Full Name"
              {...register("name", { required: "Field is required" })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-white">Address</Label>
            <Input
              placeholder="Address"
              {...register("address", { required: "Field is required" })}
            />
            {errors.address && (
              <p className="text-red-600">{errors.address.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-white">Phone Number</Label>
            <Input
              placeholder="Phone number"
              {...register("phoneNumber", { required: "Field is required" })}
            />
            {errors.phoneNumber && (
              <p className="text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-white">Payment Method</Label>
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field: { onChange, value } }) => (
                <Select onValueChange={onChange} value={value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Card Method</SelectLabel>
                      <SelectItem value="card">Card</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
              rules={{ required: "This field is required" }}
            />
            {errors.paymentMethod && (
              <p className="text-red-600">{errors.paymentMethod.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-white">Material</Label>
            <Controller
              control={control}
              name="material"
              render={({ field: { onChange, value } }) => (
                <Select
                  disabled={isPendingMaterials}
                  onValueChange={onChange}
                  value={value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Materials</SelectLabel>
                      {materials?.materials.map((mat) => (
                        <SelectItem key={mat.name} value={mat.id.toString()}>
                          {mat.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
              rules={{ required: "This field is required" }}
            />
            {errors.material && (
              <p className="text-red-600">{errors.material.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-white">File</Label>
            <Input
              accept=".iges,.step,.obj"
              placeholder="File"
              type="file"
              {...register("file", { required: "This field is required" })}
            />
            {errors.file && (
              <p className="text-red-600">{errors.file.message}</p>
            )}
          </div>
          <Button disabled={isPendingCreateOrder} type="submit">
            Submit
          </Button>
        </form>
        {file && <Viewer file={file} />}
      </div>
    </div>
  );
}
