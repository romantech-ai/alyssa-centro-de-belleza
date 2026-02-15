export const clinic = {
  name: "ALYSSA CENTRO DE BELLEZA",
  logo: "/images/logo.png",
  tagline: "Tu belleza en las mejores manos en Almansa",
  description: "ALYSSA CENTRO DE BELLEZA en Almansa es tu centro de referencia para peluquería y estética avanzada. Con 4.9 estrellas en Google, Mariángeles y su equipo ofrecen tratamientos de depilación láser diodo de última generación, maquillaje profesional de larga duración, servicios de peluquería y manicura con productos premium. Técnicas actualizadas y atención personalizada que transforman tu imagen con resultados visibles desde la primera sesión.",
  colors: {
    primary: "#a99759",
    secondary: "#332d1b",
    accent: "#e4c879",
    neutral: "#f8f7f2"
  },
  phone: "605 99 12 72",
  whatsapp: "+34605991272",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "Esquina la Rosa, C. Petrola, 02640 Almansa, Albacete, España",
    city: "Almansa",
    province: "Albacete",
    postalCode: "02640",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=11359268757620777416&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=ALYSSA%20CENTRO%20DE%20BELLEZA%20%4038.862%2C-1.09314&z=16&output=embed",
  coordinates: {
    lat: 38.862,
    lng: -1.09314
  },
  schedule: [
    {
      days: "lunes",
      hours: "Cerrado"
    },
    {
      days: "martes",
      hours: "9:30–13:00, 16:00–20:00"
    },
    {
      days: "miércoles",
      hours: "10:00–13:00, 17:00–20:00"
    },
    {
      days: "jueves",
      hours: "9:30–13:00, 16:00–20:00"
    },
    {
      days: "viernes",
      hours: "10:00–19:00"
    },
    {
      days: "sábado",
      hours: "8:30–14:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.9,
    count: 23,
    url: "https://maps.google.com/?cid=11359268757620777416&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Mariam Poveda",
        rating: 5,
        text: "Una profesional magnífica. Nos maquillamos mi hermana, mi madre y yo y quedamos ideales y muy favorecidas. Además el maquillaje duró toooodo el día perfecto.  Muchas gracias  por dejarnos tan guapas!! Muy recomendable :)",
        date: "Hace 4 meses"
      },
      {
        author: "Mª Pilar Cuenca Blanco",
        rating: 5,
        text: "Muy buena calidad en sus productos. La dueña es peluquera y esteticista y muy actualizada en diferentes tratamientos y técnicas. Tiene una máquina de láser diodo que es una pasada, funciona genial!",
        date: "Hace 4 años"
      },
      {
        author: "Elena Sánchez",
        rating: 5,
        text: "Muy buen servicio Mariangeles es toda una profesional. Productos de primera calidad y atención inmejorable. Un 10.",
        date: "Hace 2 años"
      },
      {
        author: "NICO FLASH",
        rating: 5,
        text: "Para lo que necesites, siempre te atiende con una sonrisa. Gran profesional de la peluquería / esteticien.",
        date: "Hace 7 años"
      },
      {
        author: "Encarna Morcillo",
        rating: 5,
        text: "Llevo años yendo a este centro y me encanta el trabajo y los tratamientos que me realiza",
        date: "Hace 6 años"
      }
    ]
  },
  services: [
    {
      id: "depilacion-laser",
      name: "Depilación Láser Diodo",
      description: "Tecnología láser diodo de última generación que garantiza resultados definitivos. Nuestro equipo de última tecnología es altamente efectivo y seguro para todo tipo de piel. Elimina el vello de raíz con sesiones cómodas y resultados visibles desde el primer tratamiento.",
      benefits: [
        "Eliminación definitiva del vello",
        "Tecnología láser diodo de última generación",
        "Resultados visibles desde la primera sesión"
      ],
      icon: "Zap"
    },
    {
      id: "maquillaje-profesional",
      name: "Maquillaje Profesional",
      description: "Maquillaje de alta duración para eventos, bodas y ocasiones especiales. Técnicas profesionales que realzan tu belleza natural y te hacen lucir favorecida todo el día. Productos de primera calidad que garantizan un acabado impecable que dura desde la mañana hasta la noche.",
      benefits: [
        "Duración perfecta todo el día",
        "Te favorece y realza tu belleza natural",
        "Ideal para bodas y eventos especiales"
      ],
      icon: "Sparkles"
    },
    {
      id: "peluqueria",
      name: "Peluquería Profesional",
      description: "Servicios completos de peluquería con técnicas actualizadas y productos premium. Corte, color, tratamientos capilares y peinados para cualquier ocasión. Mariángeles, peluquera profesional, está al día en las últimas tendencias para ofrecerte el look que deseas.",
      benefits: [
        "Técnicas y tendencias actualizadas",
        "Productos de primera calidad",
        "Asesoramiento personalizado de imagen"
      ],
      icon: "Sparkles"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con productos de alta gama. Manicuras duraderas, tratamientos de uñas y diseños personalizados. Atención al detalle para que tus manos y pies luzcan impecables en todo momento.",
      benefits: [
        "Esmaltes y productos de primera calidad",
        "Acabados duraderos y profesionales",
        "Cuidado completo de manos y pies"
      ],
      icon: "Hand"
    },
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados para cada tipo de piel con productos premium. Tratamientos de hidratación profunda, antiedad y luminosidad que transforman tu rostro. Protocolos adaptados a tus necesidades específicas para resultados visibles y duraderos.",
      benefits: [
        "Productos de primera calidad",
        "Tratamientos personalizados",
        "Resultados visibles desde la primera sesión"
      ],
      icon: "Flower2"
    },
    {
      id: "tratamientos-corporales",
      name: "Tratamientos Corporales",
      description: "Tratamientos estéticos corporales avanzados para reafirmar, reducir y mejorar la textura de tu piel. Técnicas actualizadas que combinan tecnología y productos de alta gama para resultados efectivos y duraderos.",
      benefits: [
        "Tecnología estética avanzada",
        "Protocolos personalizados",
        "Resultados medibles y duraderos"
      ],
      icon: "Heart"
    },
    {
      id: "micropigmentacion",
      name: "Micropigmentación",
      description: "Maquillaje semipermanente para cejas, labios y ojos con resultados naturales. Técnicas precisas que realzan tus facciones de forma sutil y favorecedora. Despierta perfectamente maquillada cada día sin esfuerzo.",
      benefits: [
        "Resultados naturales y favorecedores",
        "Técnicas actualizadas y precisas",
        "Ahorra tiempo en tu rutina diaria"
      ],
      icon: "Eye"
    },
    {
      id: "extensiones-pestanas",
      name: "Extensiones de Pestañas",
      description: "Mirada impactante con extensiones de pestañas pelo a pelo. Aplicación profesional que respeta la salud de tus pestañas naturales mientras añade volumen y longitud. Resultados espectaculares que realzan tu mirada de forma natural.",
      benefits: [
        "Mirada más intensa y expresiva",
        "Aplicación pelo a pelo profesional",
        "Larga duración con mantenimiento adecuado"
      ],
      icon: "Eye"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llama al 605 99 12 72 o envíanos un WhatsApp para reservar tu cita. Te atendemos siempre con una sonrisa y encontramos el mejor horario para ti."
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "Analizamos tus necesidades específicas y te asesoramos sobre los tratamientos más adecuados. Diseñamos un plan personalizado con productos y técnicas de primera calidad."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Realizamos tu tratamiento con tecnología de última generación y productos premium. Técnicas actualizadas aplicadas por profesionales con años de experiencia que garantizan tu comodidad."
    },
    {
      step: 4,
      title: "Resultados Espectaculares",
      description: "Disfruta de resultados visibles y duraderos desde la primera sesión. Te proporcionamos seguimiento personalizado y consejos para mantener los resultados en el tiempo."
    }
  ],
  whyUs: [
    {
      title: "Profesionales Altamente Cualificadas",
      description: "Mariángeles es peluquera y esteticista con amplia experiencia y formación continua. Siempre actualizada en las últimas técnicas y tendencias del sector para ofrecerte los tratamientos más avanzados y efectivos.",
      icon: "Sparkles"
    },
    {
      title: "Valoración Excelente: 4.9 Estrellas",
      description: "Más de 23 clientas nos avalan con 4.9 estrellas en Google. Nuestras clientas destacan la profesionalidad, los resultados espectaculares y la atención inmejorable. Su confianza es nuestro mayor orgullo.",
      icon: "Heart"
    },
    {
      title: "Tecnología de Última Generación",
      description: "Equipamos nuestro centro con la mejor tecnología del mercado, como nuestro láser diodo de última generación que funciona de manera excepcional. Invertimos en tecnología avanzada para garantizar los mejores resultados.",
      icon: "Zap"
    },
    {
      title: "Productos de Primera Calidad",
      description: "Trabajamos exclusivamente con productos premium y marcas de alta gama en todos nuestros tratamientos. La calidad de los productos es fundamental para conseguir resultados duraderos y cuidar tu piel y cabello de forma óptima.",
      icon: "Flower2"
    }
  ],
  team: [
    {
      name: "Mariángeles",
      role: "Directora y Esteticista Profesional",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En ALYSSA CENTRO DE BELLEZA nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "ALYSSA CENTRO DE BELLEZA - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "ALYSSA CENTRO DE BELLEZA - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "ALYSSA CENTRO DE BELLEZA - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "ALYSSA CENTRO DE BELLEZA - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "ALYSSA CENTRO DE BELLEZA - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "ALYSSA CENTRO DE BELLEZA - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "ALYSSA CENTRO DE BELLEZA - Imagen 7"
    }
  ],
  faq: [
    {
      question: "¿Qué tecnología láser utilizáis en ALYSSA CENTRO DE BELLEZA?",
      answer: "Utilizamos tecnología láser diodo de última generación, considerada una de las más efectivas y seguras del mercado. Esta tecnología funciona de manera excepcional en todo tipo de piel y garantiza la eliminación definitiva del vello con máxima comodidad. Nuestras clientas destacan en sus reseñas lo bien que funciona nuestro equipo láser."
    },
    {
      question: "¿Cuánto dura el maquillaje profesional para eventos?",
      answer: "Nuestro maquillaje profesional está diseñado para durar todo el día en perfecto estado, desde la mañana hasta la noche. Utilizamos productos de primera calidad y técnicas profesionales que garantizan un acabado impecable que resiste horas sin retoques. Ideal para bodas, eventos y ocasiones especiales donde necesitas estar perfecta durante toda la jornada."
    },
    {
      question: "¿Qué servicios de peluquería ofrecéis?",
      answer: "En ALYSSA CENTRO DE BELLEZA ofrecemos servicios completos de peluquería profesional: corte, color, mechas, tratamientos capilares, peinados para eventos y asesoramiento de imagen. Mariángeles, nuestra peluquera profesional, está constantemente actualizada en las últimas técnicas y tendencias para ofrecerte los mejores resultados con productos de primera calidad."
    },
    {
      question: "¿Necesito cita previa para los tratamientos?",
      answer: "Sí, trabajamos con cita previa para garantizar una atención personalizada y dedicarte el tiempo que mereces sin esperas. Puedes reservar tu cita llamando al 605 99 12 72 o por WhatsApp. Siempre te atendemos con una sonrisa y buscamos el horario que mejor se adapte a ti."
    },
    {
      question: "¿Qué productos utilizáis en los tratamientos?",
      answer: "En ALYSSA CENTRO DE BELLEZA trabajamos exclusivamente con productos de primera calidad y marcas premium. Nuestras clientas destacan en sus reseñas la excelente calidad de los productos que utilizamos, tanto en tratamientos faciales y corporales como en peluquería y manicura. La calidad es nuestra prioridad para garantizar los mejores resultados."
    },
    {
      question: "¿Cuántas sesiones de láser necesito para ver resultados?",
      answer: "Los resultados son visibles desde la primera sesión, notarás reducción del vello y que crece más fino. Generalmente se recomiendan entre 6 y 8 sesiones para una eliminación definitiva, aunque varía según la zona y tipo de vello. En tu consulta personalizada te haremos una valoración específica y te diseñaremos un plan adaptado a tus necesidades."
    },
    {
      question: "¿Por qué ALYSSA CENTRO DE BELLEZA tiene tan buenas valoraciones?",
      answer: "Nuestro compromiso con la excelencia nos ha llevado a conseguir 4.9 estrellas sobre 5 en Google con 23 reseñas. Nuestras clientas valoran la profesionalidad de Mariángeles, la calidad de nuestros productos y tratamientos, la tecnología de última generación como nuestro láser diodo, y sobre todo la atención personalizada e inmejorable que ofrecemos. Muchas llevan años confiando en nosotros."
    },
    {
      question: "¿Ofrecéis tratamientos de estética avanzada?",
      answer: "Sí, en ALYSSA CENTRO DE BELLEZA estamos constantemente actualizadas en las últimas técnicas y tratamientos estéticos. Además de depilación láser diodo, ofrecemos tratamientos faciales y corporales avanzados, micropigmentación, extensiones de pestañas y todos los servicios de peluquería y manicura. Combinamos tecnología de última generación con productos premium para resultados excepcionales."
    }
  ],
  seo: {
    titleTemplate: "%s | ALYSSA CENTRO DE BELLEZA",
    defaultTitle: "ALYSSA CENTRO DE BELLEZA - Estética y Peluquería Almansa",
    defaultDescription: "Centro de belleza en Almansa con 4.9★. Depilación láser diodo, maquillaje profesional, peluquería y tratamientos estéticos. Productos premium y tecnología avanzada. ☎️ 605 99 12 72",
    keywords: [
      "ALYSSA CENTRO DE BELLEZA",
      "centro de belleza Almansa",
      "depilación láser Almansa",
      "peluquería Almansa",
      "esteticista Almansa",
      "maquillaje profesional Almansa",
      "tratamientos faciales Almansa",
      "manicura Almansa",
      "láser diodo Almansa",
      "centro estético Almansa Albacete",
      "micropigmentación Almansa",
      "extensiones pestañas Almansa"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "ALYSSA CENTRO DE BELLEZA",
    cif: "",
    registeredAddress: "Esquina la Rosa, C. Petrola, 02640 Almansa, Albacete, España, Almansa, Albacete"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Almansa"
  ],
  heroDescription: "En ALYSSA CENTRO DE BELLEZA combinamos peluquería profesional con los tratamientos estéticos más avanzados de Almansa. Depilación láser diodo de última generación, maquillaje de larga duración y cuidados capilares con productos de primera calidad. Más de 23 clientes nos avalan con 4.9 estrellas. Tu belleza merece lo mejor.",
  specialty: "Estética y Peluquería Avanzada",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para verte y sentirte radiante?",
  ctaDescription: "Reserva tu cita en ALYSSA CENTRO DE BELLEZA y descubre por qué somos el centro mejor valorado de Almansa. Primera consulta personalizada para diseñar tu tratamiento ideal.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
