export default function SmallCard({
  image,
  heading,
}: {
  image: string;
  heading: string;
}) {
  return (
    <>
      <div>
        {heading}
        <img src={image} />
      </div>
    </>
  );
}
