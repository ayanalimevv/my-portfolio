import { LinkIcon } from "./LinkIcon";
import { NormalIcon } from "./NormalIcon";

// Icon renders a image icon with a text in bottom and if link is provided will redirect to it.

export const Icon = ({
  text,
  imagePath,
  link,
}: {
  text: string;
  imagePath: string;
  link?: string;
}) => {
  return (
    <>
      {link ? (
        <LinkIcon imagePath={imagePath} link={link} text={text} />
      ) : (
        <NormalIcon imagePath={imagePath} text={text} />
      )}
    </>
  );
};
