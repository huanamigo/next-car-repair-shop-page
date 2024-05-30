import Hero from '@/components/Hero/Hero';
import productsImg from '../../../public/products.jpg';

export default function Products() {
  return (
    <div>
      <Hero imgData={productsImg} imgAlt="Car engine" title="Products Page" />
    </div>
  );
}
