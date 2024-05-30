import Hero from '@/components/Hero/Hero';
import aboutImg from '../../../public/about.jpg';

export default function About() {
  return (
    <div>
      <Hero imgData={aboutImg} imgAlt="Car engine" title="About Page" />
    </div>
  );
}
