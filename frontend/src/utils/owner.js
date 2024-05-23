import { tokenNotExist } from "#utils/token";
import userApi from "#api/user";
import store from "#store/store";

export async function isNotOwner() {
    let bool = true;
    try {
        if (!tokenNotExist()) {
              await store
                .dispatch(userApi.endpoints.getOwner.initiate())
                .unwrap();
            bool = false;
        } else {
            bool = true;
        }
    } catch (e) {
        console.log(e);
        bool = true;
    }

    return bool;
}
export async function isOwner() {
    let bool = false;
    try {
        if (!tokenNotExist()) {
             await store
                .dispatch(userApi.endpoints.getOwner.initiate())
                .unwrap();
            bool = true;
        } else {
            bool = false;
        }
    } catch (e) {
        console.log(e);
        bool = false;
    }

    return bool;
}
