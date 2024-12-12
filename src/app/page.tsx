import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TechSundanise Solutions</h1>
          <p className="text-xl mb-8">Empowering businesses with cutting-edge technology solutions</p>
          <Link href="/services" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90">
            Explore Our Services
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg mb-4">
          TechSundanise Solutions is a leading technology company dedicated to providing innovative solutions for modern businesses. 
          With our team of expert developers and consultants, we help organizations leverage the latest technologies to drive growth and efficiency.
        </p>
        <div className="text-center">
          <Link href="/about" className="text-primary hover:underline">Learn More About Us</Link>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Web Development', 'Mobile Apps', 'Cloud Solutions'].map((service) => (
              <div key={service} className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: 'Rafeal struick', company: 'ABC Corp', text: 'TechSundanise helped us streamline our operations and increase productivity.' },
            { name: 'Ragnar oratmagoen', company: 'XYZ Inc', text: 'The mobile app developed by TechSundanise has revolutionized our customer engagement.' }
          ].map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg">
              <p className="mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}, {testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

