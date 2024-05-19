import { baseUrl } from "#constants/api";

export function handleProjectImg(name) {
    name = name || "imgId";
    return baseUrl + "/public/imgs/projects/" + name;
}
