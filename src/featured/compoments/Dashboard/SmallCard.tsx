import { Link } from "react-router";
import { Card, CardContent, CardFooter } from "#components/ui/card";

export default function SmallCard({
  id,
  image,
  heading,
  price,
  currency,
}: {
  id: string;
  image: string;
  heading: string;
  price: number;
  currency: string;
}) {
  return (
    <Link to={`/product/${id}`}>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-0">
          <img
            src={image}
            alt={heading}
            className="w-full h-40 object-cover rounded-t-md"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-3 gap-1">
          <p className="text-sm font-medium line-clamp-1">{heading}</p>
          <p className="text-sm text-muted-foreground">
            {price} {currency}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}