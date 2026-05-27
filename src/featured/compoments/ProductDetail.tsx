import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#components/ui/card"
import type { Product } from "../../types/supabase"


export default function ProductDetails({product}:{product: Product}) {
    return(
   <Card>
  <CardHeader>
    <CardTitle>{product.name}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
   )
   
    
}