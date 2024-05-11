export function saveTokenHandler(result) {
  const token = result.token
  localStorage.setItem("token",token)
}