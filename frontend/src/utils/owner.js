import { tokenNotExist } from "#utils/token";
import userApi from "#api/user";

export async function isNotOwner() {
    let result = await userApi.endpoints.getProfile.initiate();
    console.log(result);
    if (tokenNotExist()) return true;
    return false;
}
