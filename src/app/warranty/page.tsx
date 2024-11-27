import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty",
};

export default function WarrantyPage() {
  return (
    <>
      <main className="container mx-auto">
        <div className="h-screen">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdROtsWJaCUNh21RAJMe02VL7PI9cTW8CL9wV-JafC3tO30PQ/viewform?embedded=true"
            className="h-full w-full"
          >
            Loading…
          </iframe>
        </div>
      </main>
    </>
  );
}
