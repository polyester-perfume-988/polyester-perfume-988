import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { createOrder } from "@/services/order";
import { IDefaultResponse } from "@/types/api";

type TOptions = UseMutationOptions<
  IDefaultResponse,
  Error,
  TVariables,
  unknown
>;

type TVariables = {
  formData: FormData;
  token: string;
};

export function useCreateOrder(options?: TOptions) {
  return useMutation({
    mutationFn: ({ formData, token }) => createOrder({ formData, token }),
    ...options,
  });
}
