export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kumar Electricals",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    "description": "Reliable electrical repairs, supplies, and house wiring services in Lucknow since 2014",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "510/205, Lala Surajbali Marg, New Hyderabad, Lala",
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
    "telephone": "+919453816645",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "₹₹"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
