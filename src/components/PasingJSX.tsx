import { PropsWithChildren, ReactNode } from "react";

type Props = {
  title: string;
  sidebar: ReactNode;
};

export function Layout({ title, children, sidebar }: PropsWithChildren<Props>) {
  return (
    <>
      <div className="sidebar">{sidebar}</div>
      <main className="content">
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}
