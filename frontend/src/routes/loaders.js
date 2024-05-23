import { redirect } from "#rrd";
import { isOwner, isNotOwner } from "#utils/owner";
import eruda from "eruda";

export async function dashboardLoader() {
    if (await isNotOwner()) return redirect("/signin");
    return null;
}

export async function baseLoader() {
    try {
        if (await isOwner()) {
    eruda.init();
        }
    } catch (e) {
        console.log(e);
    }
    return null;
}
