import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Voseo",
};

export default function SupportPage() {
  return (
    <>
    <h1>Ran into an issue? We'll take care of it.</h1>
      <p>
        For support, please contact{" "}
        <a href="mailto:tymek@voseo.co">tymek@voseo.co</a> with any bug reports or queries
        about the Voseo app.
      </p>
    </>
  );
}
