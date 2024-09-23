import { useState } from "react";

type AuthState = {
  authenticated: boolean;
  user?: {
    firstname: string;
    lastname: string;
  };
};

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

function TodoList() {
  // without passing AuthState, we wouldn't be able to set the user
  const [authState, setAuthState] = useState<AuthState>({
    authenticated: false,
  });
  // data is loaded asynchronously and thus null on first render
  const [data, setData] = useState<Array<Todo> | null>(null);

  // component logic
}
