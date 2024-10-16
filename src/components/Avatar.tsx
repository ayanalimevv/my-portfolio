export const Avatar = ({
  imagePath,
  altText,
}: {
  imagePath: string;
  altText: string;
}) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={`/${imagePath}`} alt={altText} />
      </div>
    </div>
  );
};
