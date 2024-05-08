import error from "#utils/error.js";

export function notFoundRoute(rq, rs, nx) {
    nx(error("not found route",404))
}
