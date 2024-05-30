import Hero from '@/components/Hero/Hero';
import contactImg from '../../../public/contact.jpg';

export default function Contact() {
  return (
    <div>
      <Hero imgData={contactImg} imgAlt="Telephone" title="Contact Page" />
    </div>
  );
}
