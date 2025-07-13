import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getMaterials } from "@/services/material";
import { IMaterial_Get_Materials } from "@/types/api";

type TOptions = Omit<
  UseQueryOptions<IMaterial_Get_Materials, Error>,
  "queryKey"
>;

export function useMaterials({ options }: { options?: TOptions }) {
  return useQuery({
    queryFn: () => getMaterials(),
    queryKey: ["materials"],
    ...options,
  });
}
