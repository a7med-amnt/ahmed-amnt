export default function (msg, statusCode) {
    let error = new Error(msg);
    error.statusCode = statusCode || 400
    return error;
}
