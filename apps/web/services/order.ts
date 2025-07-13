import { BASE_URL } from "@/config/endpoints";
import { IDefaultResponse, IOrder_Create_Order } from "@/types/api";

export async function createOrder({
  formData,
  token,
}: {
  formData: FormData;
  token: string;
}) {
  const res = await fetch(`${BASE_URL}/order/create`, {
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  });

  const data = (await res.json()) as IOrder_Create_Order;
  if (!data.success)
    return Promise.reject(JSON.stringify(data) as unknown as IDefaultResponse);

  return data as IOrder_Create_Order;
}
