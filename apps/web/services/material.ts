"use server";

import { auth } from "@clerk/nextjs/server";

import { BASE_URL } from "@/config/endpoints";
import { IDefaultResponse, IMaterial_Get_Materials } from "@/types/api";

export async function getMaterials() {
  const { getToken } = await auth();
  const token = await getToken();

  const res = await fetch(`${BASE_URL}/material/materials`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  const data = (await res.json()) as IMaterial_Get_Materials;
  if (!data.success)
    return Promise.reject(JSON.stringify(data) as unknown as IDefaultResponse);

  return data as IMaterial_Get_Materials;
}
