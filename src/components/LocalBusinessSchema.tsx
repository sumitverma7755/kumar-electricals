export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kumar-electricals-pi.vercel.app",
    "name": "Kumar Electricals",
    "image": "https://kumar-electricals-pi.vercel.app/Logo.png",
    "description": "Trusted electrical shop in Lucknow since 2000. Expert repairs, genuine electrical parts, and house wiring services in New Hyderabad, Nishatganj.",
    "url": "https://kumar-electricals-pi.vercel.app",
    "telephone": "+919453816645",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New Hyderabad, Nishatganj",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.867192,
      "longitude": 80.949335
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps/search/?api=1&query=Kumar+Electricals+New+Hyderabad+Nishatganj+Lucknow"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Lucknow",
        "containedInPlace": {
          "@type": "State",
          "name": "Uttar Pradesh"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 26.867192,
        "longitude": 80.949335
      },
      "geoRadius": "15000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Retail",
            "description": "Genuine electrical products from top brands - Havells, Orient, Philips, Anchor"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Expert Repairs",
            "description": "Motor winding, ceiling fan repair, mixer grinder repair, appliance fixing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Services",
            "description": "Complete house wiring, inverter setup, circuit breaker installation"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "4"
    },
    "foundingDate": "2000",
    "slogan": "Powering New Hyderabad Since 2000"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
