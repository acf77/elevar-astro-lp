import { buildUrl } from "cloudinary-build-url";
import { cloneElement } from "react";

export const loadImageFromCloudinary = (imageUrl) => {
  return buildUrl(imageUrl, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
};

export const OptimizedImage = ({
  url,
  width,
  height,
  alt,
  children,
  borderRadius,
}) => {
  return (
    <div
      style={{
        position: "relative",
        height: 0,
        paddingTop: `${(height / width) * 100}%`,
        backgroundImage: `url(${loadImageFromCloudinary(url)})`,
        backgroundPosition: "center center",
        backgroundSize: `100%`,
        borderRadius: borderRadius,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {cloneElement(children, {
          width: width,
          height: height,
          src: url,
          alt: alt,
        })}
      </div>
    </div>
  );
};
