import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import globalStyleUrl from "~/styles/global.css";

export const links = () => [{rel: "stylesheet", href: globalStyleUrl}];

export const meta: MetaFunction = () => {
  const description = "Learning module india Blog";
  const title = "Learning module india Blog";
  const keywords = "remix, react, javascript";

  return {
    title,
    description,
    keywords,
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
