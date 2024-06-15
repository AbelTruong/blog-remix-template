import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Abel Blogs" },
    { name: "description", content: "Welcome to my blog!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Hello world</h1>
    </div>
  );
}
