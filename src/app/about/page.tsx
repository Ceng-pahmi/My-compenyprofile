import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">About TechInnovate Solutions</h1>
        <p className="text-lg mb-4">
          TechInnovate Solutions is a leading technology company dedicated to providing innovative solutions for modern businesses. 
          Founded in 2010, we have grown from a small startup to a global technology partner trusted by businesses of all sizes.
        </p>
        <p className="text-lg mb-4">
          Our mission is to empower organizations with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Our History</h2>
        <ul className="space-y-4">
          <li>
            <strong>2010:</strong> Founded by a group of tech enthusiasts in a small garage office.
          </li>
          <li>
            <strong>2013:</strong> Launched our first major product, an innovative cloud-based project management tool.
          </li>
          <li>
            <strong>2016:</strong> Expanded our services to include mobile app development and AI solutions.
          </li>
          <li>
            <strong>2019:</strong> Opened offices in three new countries, becoming a truly global company.
          </li>
          <li>
            <strong>2022:</strong> Recognized as one of the fastest-growing tech companies in our region.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
        <p className="text-lg mb-4">
          At TechSundanise, we foster a culture of innovation, collaboration, and continuous learning. We believe in:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Embracing challenges and pushing the boundaries of technology</li>
          <li>Promoting diversity and inclusion in all aspects of our work</li>
          <li>Maintaining a healthy work-life balance for all our team members</li>
          <li>Contributing to our communities through various outreach programs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Ceng Pahmi', title: 'CEO', image: '/placeholder.svg?height=200&width=200' },
            { name: 'Faiz', title: 'CTO', image: '/placeholder.svg?height=200&width=200' },
            { name: 'Fardan', title: 'Head of Design', image: '/placeholder.svg?height=200&width=200' },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

