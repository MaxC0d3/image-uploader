import { subtitle, title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-lg text-center">
        <h1 className={title()}>Upload your&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>image&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Drop and drag the image.
        </h2>
      </div>
    </section>
  );
}
