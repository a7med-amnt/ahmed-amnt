export default function (er, rq, rs, nt) {
    let message = er.message || "no message";
    let stack = process.env.NODE_ENV == "development" ? er?.stack : null;
    let statusCode;
    
    if (!er.statusCode) statusCode = 500;
    else statusCode = er.statusCode;
    rs.status(statusCode);
    rs.json({
        message,
        stack
    });
}
