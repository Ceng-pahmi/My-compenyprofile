export default function Services() {
    const services = [
      {
        title: 'Web Development',
        description: 'We create responsive, user-friendly websites and web applications tailored to your business needs.',
        features: ['Custom design', 'E-commerce solutions', 'Content Management Systems', 'API integrations']
      },
      {
        title: 'Mobile App Development',
        description: 'Our team develops high-performance mobile apps for iOS and Android platforms.',
        features: ['Native and cross-platform apps', 'UI/UX design', 'App Store optimization', 'Ongoing support and maintenance']
      },
      {
        title: 'Cloud Solutions',
        description: 'We help businesses leverage the power of cloud computing to improve scalability and efficiency.',
        features: ['Cloud migration', 'Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Cloud security']
      },
      {
        title: 'AI and Machine Learning',
        description: 'Harness the power of artificial intelligence to gain insights and automate processes.',
        features: ['Predictive analytics', 'Natural Language Processing', 'Computer Vision', 'AI-powered chatbots']
      }
    ]
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-muted p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="mb-4">{service.description}</p>
              <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  