import { tokenNotExist } from "#utils/token";
import userApi from "#api/user";
import store from "#store/store";

export async function isNotOwner() {
    let result;
    try {
        if (!tokenNotExist()) {
            result = await store
                .dispatch(userApi.endpoints.getOwner.initiate())
                .unwrap();
        }
    } catch (e) {
        console.log(e);
        return true
    }
    if (!result) return true;
    return false;
}
