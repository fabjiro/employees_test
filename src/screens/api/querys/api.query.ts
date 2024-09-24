import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../config/axios.config";
import { IApiReqDto } from "./dto/request/IApiReqDto";
import { IApi } from "./dto/response/IApiResDto";

export async function getProvinces(params: IApiReqDto) {
  const { data } = await axiosInstance.get("/territory/Province", {
    params: params.toMap(),
  });

  return data as IApi;
}

export function useGetProvinces(params: IApiReqDto) {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: () => getProvinces(params),
  });
}
