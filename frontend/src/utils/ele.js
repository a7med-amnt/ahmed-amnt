import { baseUrl } from "#constants/api";

export function handleProjectImg(name) {
    //name = name || null;
    if (name) return baseUrl + "/public/imgs/projects/" + name;
    else return null;
}
