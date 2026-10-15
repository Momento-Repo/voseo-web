import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voseo Lab — Processing & Film",
};

export default function LabPage() {
  return (
    <>
      <h1>Voseo Lab</h1>
      <p>
        Every roll you shoot is processed by hand at Voseo Lab. We've spent years
        refining our workflow — from the chemistry in our tanks to the final
        scan profiles — so that your photos don&apos;t just look developed, they look
        considered.
      </p>
      <p>
        Developed by experts at our lab, our bespoke film emulation process gives
        each and every image an irreproducable filmic look.
      </p>

      <h2>Our film rolls</h2>
      <p>
        We carefully curate the film stocks available on Voseo. Each one is
        chosen for its character, its reliability in real shooting conditions, and
        the way it rewards you when you get back your prints.
      </p>

      <h2>Voseo Classic D-Roll</h2>
      <p>
        Classic D-Roll is our bread and butter — the film we&apos;d hand to anyone
        picking up a camera for the first time, and the roll seasoned shooters
        reach for when they just want to shoot without thinking.
      </p>
      <p>
        Think of it as our answer to Kodak Colormax: a wide-latitude, daylight
        film that handles everything from bright afternoons to dim house parties
        with good grace. Colours are warm and natural, grain is present but
        never intrusive, and the look sits comfortably somewhere between
        documentary and nostalgic.
      </p>
      <p>
        Classic D-Roll is the universal starting point. Shoot it anywhere, in any
        light, with any subject. It will hold up.
      </p>
    </>
  );
}
