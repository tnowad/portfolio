import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Nguyen Minh Tuan",
};

export default function Home() {
  return (
    <main className="flex h-[200vh] justify-center">
      <section className="container">Home</section>
    </main>
  );
}
