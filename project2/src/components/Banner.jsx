import { SfButton } from "@storefront-ui/react";
import classNames from "classnames";

const displayDetails = [
  {
    image:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display.png",
    title: "Sunny Days Ahead",
    subtitle: "Be inspired",
    description: "Step out in style with our sunglasses collection",
    buttonText: "Discover now",
    reverse: false,
    backgroundColor: "bg-yellow-300 hover:bg-yellow-200",
    titleClass: "md:typography-display-2",
    subtitleClass: "md:typography-headline-6",
    descriptionClass: "md:typography-text-lg",
  },
  {
    image:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png",
    title: "Pack it Up",
    subtitle: "Be active",
    description: "Explore the great outdoors with our backpacks",
    buttonText: "Discover now",
    reverse: true,
    backgroundColor: "bg-gray-300 hover:bg-gray-200",
  },
  {
    image:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-3.png",
    title: "Fresh and Bold",
    subtitle: "New collection",
    description: "Add a pop up color to your outfit",
    buttonText: "Discover now",
    reverse: false,
    backgroundColor: "bg-sky-300 hover:bg-sky-200",
  },
];

export default function DisplayHorizontalBlock() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 max-w-6xl mx-auto px-4 py-8">
      {displayDetails.map(
        ({
          image,
          title,
          subtitle,
          description,
          buttonText,
          backgroundColor,
          reverse,
          titleClass,
          subtitleClass,
        }) => (
          <div
            key={title}
            className={classNames(
              "relative flex md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full rounded-lg overflow-hidden shadow-md transition-colors duration-300",
              backgroundColor
            )}
          >
            <a
              className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
              aria-label={title}
              href="#"
            />
            <div
              className={classNames(
                "flex justify-between overflow-hidden grow",
                {
                  "flex-row-reverse": reverse,
                }
              )}
            >
              <div className="flex flex-col justify-center items-start p-4 md:p-6 w-full md:w-1/2">
                <p
                  className={classNames(
                    "uppercase typography-text-xs block font-bold tracking-widest",
                    subtitleClass
                  )}
                >
                  {subtitle}
                </p>
                <h2
                  className={classNames(
                    "mb-2 mt-2 font-bold typography-display-4",
                    titleClass
                  )}
                >
                  {title}
                </h2>
                <p className="typography-text-base block mb-4">{description}</p>
                <SfButton className="!bg-black">{buttonText}</SfButton>
              </div>
              <img
                src={image}
                alt={title}
                className="w-full md:w-1/2 object-contain p-4"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
