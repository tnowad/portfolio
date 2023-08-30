import Introduction from "@/components/Introduction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Nguyen Minh Tuan",
};

export default function Home() {
  return (
    <main>
      <Introduction />
    </main>
  );
}
