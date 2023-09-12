const BASE_URL = "http://localhost:5000";

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

// A function for making HTTP requests to the server using the Fetch API
function request<T>(
  url: string, 
  method: RequestMethod = "GET",
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  // If we pass data when calling the function, then we convert it to JSON and set it as the request body, add headers
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }

  // We use the Fetch API to send a request to the specified URL and with the selected parameters
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

// An object that provides the `post` function for making POST requests to the server
export const client = {
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  getAll: <T>(url: string) => request<T>(url, 'GET'),
};