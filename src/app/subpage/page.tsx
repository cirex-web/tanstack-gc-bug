"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const TanstackComponent = () => {
  const query = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: () =>
      new Promise<string>((re) =>
        setTimeout(() => re("Data returned by tanstack"), 3000)
      ),
  });
  return <h1>{query.data}</h1>;
};
export default function Page() {
  const router = useRouter();
  return (
    <>
      <Suspense fallback={<h1>Loading Tanstack Query</h1>}>
        <TanstackComponent />
      </Suspense>
      <button
        onClick={() => router.push("/")}
        style={{ padding: "10px 20px", fontSize: 19, margin: "20px 0" }}
      >
        Go back
      </button>
    </>
  );
}
