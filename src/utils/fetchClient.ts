const BASE_URL = "http://localhost:5000";

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

// Функція для здійснення HTTP-запитів до серверу з використанням Fetch API
function request<T>(
  url: string, 
  method: RequestMethod = "GET",
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  // Якщо ми передаємо при виклику функції дані, то перетворюємо їх у JSON та встановлюємо їх як тіло запиту, додаємо хедери
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }

  // Використовуємо Fetch API для відправлення запиту на вказаний URL і з обраними параметрами
  return fetch(`${BASE_URL}${url}`, options)
    .then(response => {
      if (!response.ok) {
        return response.json().then(errorData => {
          throw new Error(JSON.stringify(errorData.error));
        });
      }
      return response.json();
    })
    .then(data => data)
}

// Об'єкт, який надає функцію `post` для виконання POST-запитів до сервера
export const client = {
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  getAll: <T>(url: string) => request<T>(url, 'GET'),
};