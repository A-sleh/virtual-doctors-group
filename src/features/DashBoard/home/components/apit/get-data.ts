import { api } from '@/lib/api-client';

export async function getDoctor() {
  const data = await api.get(`/Doctor/GetAll?page=1&pageSize=20`);
  return data;
}

export async function getUser() {
  const data = await api.get(`/User/Profile`);
  return data;
}

export async function approvePromotionClicked(promotionId: number) {
  const data = await api.put(`/Promotion/${promotionId}/Approve`);
  return data;
}

export async function rejectPromotionApi(promotionId: number) {
  try {
    const data = await api.put(`/Promotion/${promotionId}/Reject`);
    return data;
  } catch (err) {
    console.error((err as Error).message);
  }
}
