export interface IDefaultResponse {
  success: boolean;
}

export interface IMaterial_Get_Materials extends IDefaultResponse {
  materials: {
    description: string;
    id: number;
    name: string;
  }[];
}

export interface IOrder_Create_Order extends IDefaultResponse {
  order: {
    address: string;
    createdAt: string;
    fileUrl: string;
    id: number;
    materialId: number;
    name: string;
    paymentMethod: string;
    phoneNumber: string;
    userId: string;
  };
}
