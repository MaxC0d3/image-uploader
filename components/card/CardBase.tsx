
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { useDropzone } from "react-dropzone";

type DropzoneProps = {
  onDrop: (acceptedFiles: File[]) => void;
};


export default function CardImage({ onDrop }: DropzoneProps) {

  const { getRootProps, getInputProps, open, isDragActive } =
    useDropzone({
      accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
      onDrop,
    });


  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="w-full max-w-[250px] border-none"
      fullWidth={true}
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Image
          alt="Woman listing to music"
          className="object-cover w-full"
          height={200}
          src="/images/drag.svg"
          width={250}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {
            isDragActive ? (
              <p className="text-tiny text-white/80">Drop the files here</p>
            ) :
              (
                <p className="text-tiny text-white/80">Drag and drop or</p>
              )
          }
          <Button className="text-white text-tiny bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={open}>
            Choose a file
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
