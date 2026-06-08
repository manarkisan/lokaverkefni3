import { Alert, AlertDescription, AlertTitle } from "#components/ui/alert";
import { Button } from "#components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function CartAlert({ onClose }: { onClose: () => void }) {
 const navigation = useNavigate();
    return (
    <Alert className="fixed bottom-4 right-4 w-80 shadow-lg z-50">
      <AlertTitle>Item added to cart.</AlertTitle>
      <AlertDescription>
        Go to "My Cart" to finish ordering.
      </AlertDescription>
      <div className="flex gap-2 mt-2">
        <Button variant="outline" size="sm" asChild>
          <Link to="/cart">Go to Cart</Link>
        </Button>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Dismiss
        </Button>
      </div>
    </Alert>
  );
}