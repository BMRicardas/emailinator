const API_URL = "https://api.jsonbin.io/v3/b";

const API_KEY = "$2a$10$LzMcJ46xe6JmmUj2lbbbMOxgK6NR/VKIUjwowIcvnCnNJOm8uoxku";

export function api(data: Record<string, any>) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
  });
}
