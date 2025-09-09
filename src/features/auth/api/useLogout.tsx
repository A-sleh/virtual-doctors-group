import { successToast } from "@/components/custom/toast";
import { QYERY_KEYS } from "@/lib/query-key";
import { useQueryClient } from "@tanstack/react-query"
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { userLocalStorage } from "../localstorage/user.localstore";


type IUserLogout = () => void 

export function useLogout(): IUserLogout {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const onLogout = useCallback(async () => {
        await userLocalStorage.removeUser()
        await queryClient.setQueryData([QYERY_KEYS.user],null);
        await navigate('/auth/login');
        successToast('Log out successfuly')
    },[navigate,queryClient])

    return onLogout
    
}