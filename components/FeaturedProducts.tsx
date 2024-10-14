import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { name: "N95 Respirator Mask", price: "Ksh 299", image: "/images/product1.jpg" },
  { name: "Disposable Gloves (100 pack)", price: "Ksh 1,499", image: "/images/product2.jpg" },
  { name: "Face Shield", price: "Ksh 999", image: "/images/product3.jpg" },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden bg-black/50 backdrop-blur-sm border-primary">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-primary">{product.name}</CardTitle>
                <p className="text-lg font-semibold mt-2 text-white">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}