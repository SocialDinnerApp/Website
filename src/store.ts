import { writable, readable } from 'svelte/store';

export var user;

type User = {
  username: string;
  token: string;
};

const storedUserCred = JSON.parse(localStorage.getItem("userCred"));
if (storedUserCred) {
  user = writable<User>(
    {
      username: storedUserCred['username'],
      token: storedUserCred['token'],
    }
  );
} else {
  user = writable<User>();
}

// For local testing
// export var backendUrl = readable<string>('http://localhost:8000');

// For productive backend in the cloud 
export var backendUrl = readable<string>('https://deno-gatsby.herokuapp.com');