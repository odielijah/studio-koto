import "../assets/styles/contact.css";

const contactData = [
  {
    region: "Americas",
    offices: [
      {
        name: "Los Angeles",
        address: [
          "8924 Lindblade St",
          "Culver City, CA 90232",
          "United States",
        ],
        mapLink: "#",
        people: [
          { name: "Chris Letourneau", title: "Client Services Director" },
          { name: "Dave Ladd", title: "Exec. Creative Director" },
        ],
        contact: {
          email: "la@koto.studio",
          phone: "+1 310 691 2120",
        },
      },
      {
        name: "New York",
        address: ["360 Wythe Avenue", "Brooklyn, NY 11249", "United States"],
        mapLink: "#",
        people: [
          { name: "Alex Monger", title: "Managing Director" },
          { name: "Arthur Foliard", title: "Exec. Creative Director" },
        ],
        contact: {
          email: "nyc@koto.studio",
          phone: "+1 917 803 7985",
        },
      },
    ],
  },
  {
    region: "EMEA",
    offices: [
      {
        name: "London",
        address: [
          "127-131, Great Suffolk St",
          "London SE1 1PP",
          "United Kingdom",
        ],
        mapLink: "#",
        people: [
          { name: "Katey Harvey", title: "Managing Director" },
          { name: "Dan Witchell", title: "Exec. Creative Director" },
        ],
        contact: {
          email: "london@koto.studio",
          phone: "+44 207 3786699",
        },
      },
      {
        name: "Berlin",
        address: ["Oranienstraße 188", "10999 Berlin", "Germany"],
        mapLink: "#",
        people: [
          { name: "Anne Vent", title: "Client Services Director" },
          { name: "Fred North", title: "Creative Director" },
        ],
        contact: {
          email: "berlin@koto.studio",
          phone: "+49 1728 136913",
        },
      },
    ],
  },
  {
    region: "APAC",
    offices: [
      {
        name: "Sydney",
        address: ["Suite 44 Locomotive St", "Eveleigh NSW 2015,", "Australia"],
        mapLink: "#",
        people: [
          { name: "Damian Borchok", title: "Managing Director" },
          { name: "Mel Baillache", title: "Exec. Creative Director" },
        ],
        contact: {
          email: "sydney@koto.studio",
          phone: "+61 437 478 586",
        },
      },
      {
        name: "China",
        address: ["如果您希望通过中文进行", "相关业务咨询, 请联系"],
        people: [{ name: "Wenwen Jiang", title: "Business Director" }],
        contact: {
          email: "shanghai@koto.studio",
          phone: "+86 181 1641 9398",
        },
      },
    ],
  },
];

const contactAdditional = [
  {
    title: "Global",
    people: [
      {
        name: "James Greenfield",
        title: "Chief Executive Officer",
        email: "james@koto.studio",
      },
      {
        name: "Jowey Roden",
        title: "Chief Creative Officer",
        email: "jowey@koto.studio",
      },
      {
        name: "Tom Hostler",
        title: "Chief Digital Officer",
        email: "tomhostler@koto.studio",
      },
    ],
  },
  {
    title: "Press and PR",
    people: [
      {
        name: "Nicolas Breuil",
        title: "Marketing & Business Director",
        email: "nicolas@koto.studio",
      },
    ],
  },
];

export default function Contact() {
  return (
    <>
      <div className="container py-20 bg-black text-white">
        <section className="contact py-20 bg-black text-white">
          <h1 className="max-md:leading-[1.2] leading-[1.1] max-md:tracking-[-.64px] tracking-[-2.48px] gt-lt">
            We are five creative studios across<span className="hidden md:inline"><br /></span> the globe. Let’s start
            working together.
          </h1>

          {/* Regular contact regions */}
          <div className="contact-wrapper mb-16 gt-th">
            <h2 className="gt-lt text-[31px] leading-[1] tracking-[-.64x] !mb-[24px] max-md:text-[24px] max-md:tracking-[-.48px]">
              New business
            </h2>
            {contactData.map((region, i) => (
              <div key={i} className="contact-content max-md:!border-t-0">
                <div className="region mb-4">
                  <span className="yellow-span text-[11px]">
                    {region.region}
                  </span>
                </div>

                {region.offices.map((office, j) => (
                  <ul key={j} className="three-cols grid grid-cols-3 gap-8">
                    <li className="location">
                      <p className="location-name">{office.name}</p>
                      {office.mapLink ? (
                        <a href={office.mapLink} className="location_address">
                          {office.address.map((line, k) => (
                            <span key={k}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </a>
                      ) : (
                        <p className="location_address">
                          {office.address.map((line, k) => (
                            <span key={k}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      )}
                    </li>

                    <li className="locationColumn-people text-[18px]">
                      {office.people.map((person, k) => (
                        <p key={k} className="contact__person">
                          <span>{person.name}</span>
                          <span>{person.title}</span>
                        </p>
                      ))}
                    </li>

                    <li className="locationColumn-contact text-[18px]">
                      <a
                        className="hoverable emailLink block underline"
                        href={`mailto:${office.contact.email}`}
                      >
                        {office.contact.email}
                      </a>
                      <a
                        className="hoverable phoneLink block"
                        href={`tel:${office.contact.phone}`}
                      >
                        {office.contact.phone}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>

          {/* Additional contact sections (Global + Press & PR) */}
          <div className="contact-additional flex flex-wrap gt-th">
            {contactAdditional.map((section, i) => (
              <div key={i} className="contact-wrapper mb-10">
                <h2 className="text-[32px] !mb-4">{section.title}</h2>
                <div className="contact-content">
                  <ul
                    className={`three-cols ${
                      section.people.length > 1
                        ? "grid grid-cols-3 gap-8"
                        : "grid grid-cols-1"
                    }`}
                  >
                    {section.people.map((person, j) => (
                      <li key={j}>
                        <span className="block">{person.name}</span>
                        <span className="block">{person.title}</span>
                        <a
                          className="hoverable custom-underline"
                          href={`mailto:${person.email}`}
                        >
                          {person.email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
