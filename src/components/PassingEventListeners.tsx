import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Button({ onClick }: Props) {
  return <button onClick={onClick} />;
}

function Login() {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // login logic
      }}
    >
      {/* Login form */}
    </form>
  );
}
