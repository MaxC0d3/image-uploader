
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

export default function CardSuccess({ imageUrl }: { imageUrl: string }) {

  function handlerCopy() {
    navigator.clipboard.writeText(imageUrl)
  }

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-full max-w-[250px]"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={imageUrl}
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{imageUrl}</p>
        <Button className="text-white text-tiny bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={handlerCopy}>
          Copy
        </Button>
      </CardFooter>
    </Card>
  );
}
