export function saveTokenHandler(result) {
    const token = result.token;
    localStorage.setItem("token", token);
}

export function tokenNotExist() {
    let token = localStorage.getItem("token");
    if (token) return false;
    return true;
}
