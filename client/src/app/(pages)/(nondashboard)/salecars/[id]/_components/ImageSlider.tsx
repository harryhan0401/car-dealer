import Image from "next/image";
import { useState } from "react";

interface ImageSliderProps {
  make: string;
  title: string;
  photoUrls: string[];
}

const ImageSlider = ({ make, title, photoUrls }: ImageSliderProps) => {
  const [imageUrl, setImageUrl] = useState(
    make.toLowerCase() == "bmw"
      ? "/bmw.jpg"
      : make.toLowerCase() == "mercedesbenz"
        ? "/mercedes.jpg"
        : make.toLowerCase() == "audi"
          ? "/audi.jpg"
          : ""
  );
  const handeClick = (imageUrl: string) => {
    const mainImage = document.getElementById("car-image") as HTMLImageElement;
    if (mainImage) {
      setImageUrl(imageUrl);
    }
  };
  return (
    <>
      <Image
        src={imageUrl}
        alt={title}
        fill
        id="car-image"
        className="rounded-lg object-cover w-full h-full"
        priority
      />
      <div className="absolute bottom-[-20px] left-3 flex space-x-2">
        <div className="p-1.5 bg-white rounded-lg">
          <div className="relative w-[100px] h-[75px]">
            <Image
              src={
                make.toLowerCase() == "bmw"
                  ? "/bmw.jpg"
                  : make.toLowerCase() == "mercedesbenz"
                    ? "/mercedes.jpg"
                    : make.toLowerCase() == "audi"
                      ? "/audi.jpg"
                      : ""
              }
              alt={title}
              fill
              className="rounded-lg"
              priority
              onClick={() =>
                handeClick(
                  make.toLowerCase() == "bmw"
                    ? "/bmw.jpg"
                    : make.toLowerCase() == "mercedesbenz"
                      ? "/mercedes.jpg"
                      : make.toLowerCase() == "audi"
                        ? "/audi.jpg"
                        : ""
                )
              }
            />
          </div>
        </div>
        {photoUrls.map((url: string, index: Key) => {
          return (
            <div key={index} className="p-1.5 bg-white rounded-lg">
              <div className="relative w-[100px] h-[75px]">
                <Image
                  src={url}
                  alt={title}
                  fill
                  className="rounded-lg"
                  priority
                  onClick={() => handeClick(url)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ImageSlider;
