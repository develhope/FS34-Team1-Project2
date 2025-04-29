import { Link } from "react-router-dom";
import classNames from "classnames";
import { SfButton } from "@storefront-ui/react";

const displayDetails = [
  {
    title: "Sempre connessi",
    subtitle: "Tecnologia senza limiti",
    description:
      "Scopri gli ultimi smartphone per restare al passo con i tempi",
    image:
      "https://www.ceotech.it/wp-content/uploads/2024/10/Samsung-dettaglia-la-patch-di-sicurezza-di-ottobre-2024.jpg",
    buttonText: "Scopri ora",
    buttonLink: "/mobile",
    reverse: false,
    backgroundColor: "bg-yellow-300 hover:bg-yellow-200",
    titleClass: "md:typography-display-2",
    subtitleClass: "md:typography-headline-6",
    descriptionClass: "md:typography-text-lg",
  },
  {
    title: "Vivi il gioco",
    subtitle: "Azione senza confini",
    description: "Console e accessori per un’esperienza di gioco unica",
    image:
      "https://i.etsystatic.com/20035877/r/il/641457/6740383180/il_fullxfull.6740383180_s28w.jpg",
    buttonText: "Scopri ora",
    buttonLink: "/gaming",
    reverse: true,
    backgroundColor: "bg-gray-300 hover:bg-gray-200",
  },
  {
    title: "Eleganza e visione",
    subtitle: "Design e performance",
    description: "TV di ultima generazione per un intrattenimento sofisticato",
    image:
      "https://hisense.hgecdn.net/medias/MABAGOR-515Wx515H-mabagor-imagelib-full-trim-0-0-004047bdb702b100e8aa98860e5c38c8-272086-2.jpg?context=bWFzdGVyfG1hYmFnb3Jwcm9kdWN0aW1hZ2VzfDM3MTYwfGltYWdlL2pwZWd8YURobUwyZzVaQzh4TkRrek56STBNamN6TURVeU5pOU5RVUpCUjA5U0xUVXhOVmQ0TlRFMVNGOHZiV0ZpWVdkdmNpOXBiV0ZuWld4cFlpOW1kV3hzTFhSeWFXMHZNQzh3THpBd05EQTBOMkprWWpjd01tSXhNREJsT0dGaE9UZzROakJsTldNek9HTTRYekkzTWpBNE5sOHlMbXB3Wnd8ZGI1ZGRjNTk5NjQxZTUyZDU0OWE4NmY5ODZkMTdlMWUyMzdiMTIxNGZhNmExMDRkZWYxZDQxYTY2MTZmYmExMw",
    buttonText: "Scopri ora",
    buttonLink: "/tv",
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
          buttonLink,
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

                <Link to={buttonLink || "/"}>
                  <SfButton className="!bg-black">{buttonText}</SfButton>
                </Link>
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
