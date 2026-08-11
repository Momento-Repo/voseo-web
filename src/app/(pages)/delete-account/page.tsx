import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account — Voseo",
};

export default function DeleteAccountPage() {
  return (
    <>
      <h1>Delete account</h1>
      <p>
        You can delete your Voseo account at any time, directly from within
        the app: go to{" "}
        <strong>Settings → Account → Delete account</strong> and confirm.
      </p>

      <h2>Delete by email</h2>
      <p>
        If you&apos;d rather not use the app, or can&apos;t access it, email{" "}
        <a href="mailto:tymek@voseo.co">tymek@voseo.co</a> and we&apos;ll
        delete your account and its associated data on your behalf.
      </p>
      <p>Deleting your account removes:</p>
      <ul>
        <li>Shipping addresses.</li>
        <li>Photos taken with the Voseo app.</li>
        <li>Your username, email address and account identifiers.</li>
      </ul>
      <p>
        We will <strong>not</strong> delete in-app purchase records.
      </p>

      <h2>Delete your data without deleting your account</h2>
      <p>
        Prefer to keep your account? You can request that we delete the data
        associated with it while leaving the account itself active. Email{" "}
        <a href="mailto:tymek@voseo.co">tymek@voseo.co</a> with your request
        and we&apos;ll remove your shipping addresses and photos taken with
        the app.
      </p>
      <p>
        We will <strong>not</strong> delete your username, email address,
        account identifiers, or in-app purchase records.
      </p>
    </>
  );
}
