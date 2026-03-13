const services = [
  {
    image: "https://image3.jdomni.in/library/2C/25/FE/9F75C21AB20FD9601714021ACD_1496254378880_cropped_450X450.jpeg",
    title: "Freight Forwarding Agencies",
    description: "We excel in providing a quick and reliable freight forwarding services for our clients as per their needs.",
  },
  {
    image: "https://image3.jdomni.in/library/06/D1/9D/9333AD1EFA1E54BC3F6EC248DF_1496335047865_cropped_450X450.jpeg",
    title: "Import Export Remittance Advisory Services",
    description: "We provide the best import export remittance advise and services, book an appointment to consult an expert.",
  },
  {
    image: "https://image2.jdomni.in/library/A5/73/AA/F0233421475D6F460F817BDE6B_1496331923876_cropped_450X450.jpeg",
    title: "Import Export License Consultants",
    description: "Capitalising upon abundant knowledge, we render reliable & prompt Import Export License Consultancy services.",
  },
  {
    image: "https://image3.jdomni.in/library/9D/F9/84/671E5486A4D7CAE898D4B7FD9E_1496937060013_cropped_450X450.jpeg",
    title: "Import Export Sourcing",
    description: "With our expertise in this field, we are engaged in providing import export sourcing services.",
  },
  {
    image: "https://image3.jdomni.in/library/54/64/D5/DD062AD4AD5BF2E7A0A8AA201E_1496246387656_cropped_450X450.jpeg",
    title: "Import Export Consultants",
    description: "Give your import and export business the necessary boost by consulting our skilled and qualified consultants.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <button className="btn-outline-primary text-sm">Enquire Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
