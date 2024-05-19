import { redirect } from "#rrd";
import { isNotOwner } from "#utils/owner";

export async function dashboardLoader() {
    if (await isNotOwner()) return redirect("/signin");
    return null;
}
