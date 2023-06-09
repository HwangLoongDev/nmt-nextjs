import Image from "next/image";

type Props = {
  id: string | number;
  image: string;
  title: string;
};

const Slide = ({ id, image, title }: Props) => {
  return (
    <>
      <Image alt={title} fill objectFit="contain" loading="lazy" src={image} />
    </>
  );
};

export default Slide;
