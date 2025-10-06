import { services as enServices } from './services';

export interface Service {
  title: string;
  image: string;
  description?: string;
}

const frServices: Service[] = [
  {
    title: "Peinture",
    image: "/services/painting.jpg",
    description: "Nous fournissons des services de peinture experts à Penovexium, spécialisés dans les projets intérieurs et extérieurs pour les espaces résidentiels et commerciaux. Notre équipe s'engage à fournir des finitions propres et durables en utilisant des matériaux de haute qualité et des techniques précises. De la préparation de la surface à la couche finale, nous nous assurons que chaque détail est traité avec soin, apportant une beauté et une valeur durables à votre propriété.",
  },
  {
    title: "Rénovation de façade",
    image: "/services/facade_renovation.jpg",
    description: "Rehaussez votre propriété avec nos services experts de rénovation de façade, spécialisés dans la restauration complète et la protection des extérieurs de bâtiments. Notre équipe s'engage à fournir une intégrité structurelle durable et un attrait esthétique amélioré, en utilisant des techniques avancées et des matériaux haute performance. De la réparation complète de la maçonnerie à l'imperméabilisation avancée et aux améliorations de l'efficacité énergétique, nous nous assurons que chaque détail technique et visuel est traité avec précision, sécurisant votre investissement et apportant une valeur exceptionnelle à long terme à votre propriété.",
  },
  {
    title: "Rénovation de salle de bain",
    image: "/services/bathroom_renovation.jpg",
    description: "Créez la salle de bain de vos rêves avec nos services de rénovation spécialisés. Notre équipe s'engage à fournir des transformations personnalisées de haute qualité qui allient style moderne et fonctionnalité ultime. En utilisant des matériaux durables et des techniques expertes, nous gérons chaque phase de votre projet - de la plomberie et du carrelage à l'installation des luminaires et aux détails de finition. Nous nous assurons que chaque rénovation de salle de bain est terminée efficacement et sans faille, vous offrant un sanctuaire magnifique et durable qui maximise le confort et la valeur de votre maison.",
  },
  {
    title: "Rénovation de cuisine",
    image: "/services/kitchen_renovation.jpg",
    description: "Réalisez votre cuisine idéale avec nos services de rénovation experts, spécialisés dans les conceptions personnalisées pour la vie moderne. Notre équipe s'engage à fournir une qualité exceptionnelle, en gérant chaque élément technique et esthétique - des modifications structurelles et de la plomberie à l'ébénisterie personnalisée et aux finitions haut de gamme. En utilisant des matériaux de première qualité et un savoir-faire méticuleux, nous assurons une transformation transparente et efficace, vous offrant un espace magnifique et hautement fonctionnel qui devient le cœur de votre maison et améliore considérablement sa valeur.",
  },
  {
    title: "Maçonnerie",
    image: "/services/masonry_work.jpg",
    description: "Préservez et améliorez la structure de votre propriété avec nos services de maçonnerie experts. Notre équipe s'engage dans la construction, la réparation et la restauration précises de tous les éléments en pierre, en brique et en béton. En utilisant des techniques éprouvées et des matériaux durables de haute qualité, nous nous spécialisons dans tout, du rejointoiement et de la réparation de murs structuraux aux nouvelles installations. Nous nous assurons que chaque projet de maçonnerie offre une durabilité, une résistance à l'eau et une qualité esthétique exceptionnelles, protégeant votre investissement pour les décennies à venir.",
  },
  {
    title: "Béton armé",
    image: "/services/reinforced_concrete.jpg",
    description: "Construisez avec une résistance inégalée en utilisant nos services spécialisés de béton armé. Notre équipe s'engage à fournir des fondations, des dalles, des poutres et des colonnes structurellement saines qui forment le cœur de tout projet de construction durable. Nous combinons de manière experte du béton de haute qualité avec un renforcement en acier précisément placé pour assurer une capacité de charge et une longévité maximales. Nous garantissons que chaque coulée de béton et chaque structure respectent les normes les plus élevées en matière de sécurité et d'excellence en ingénierie, fournissant le cadre robuste essentiel à votre investissement à long terme.",
  },
  {
    title: "Toiture",
    image: "/services/roofing.jpg",
    description: "Protégez l'ensemble de votre propriété avec nos services de toiture experts, spécialisés dans l'installation, la réparation et l'entretien complets. Notre équipe s'engage à fournir une imperméabilisation supérieure et une protection durable, en utilisant uniquement des matériaux de première qualité et haute performance adaptés à toutes les conditions météorologiques. De l'inspection structurelle détaillée à l'application méticuleuse de bardeaux ou de membranes, nous nous assurons que chaque détail est exécuté avec précision, vous offrant un toit durable et étanche qui maximise l'efficacité énergétique et préserve votre investissement.",
  },
  {
    title: "Cloisonnement et isolation",
    image: "/services/partitioning_and_insulation.jpg",
    description: "Optimisez et perfectionnez votre espace intérieur avec nos services complets de cloisonnement et d'isolation. Notre équipe s'engage à définir des aménagements flexibles et fonctionnels et à atteindre des performances thermiques et acoustiques supérieures. Nous nous spécialisons dans les installations précises, y compris les systèmes de plaques de plâtre (Placo) pour des murs lisses et prêts à finir, associés à une isolation à haute efficacité. Nous nous assurons que chaque projet de cloisonnement améliore le confort, minimise le bruit et améliore considérablement l'efficacité énergétique et la convivialité de votre propriété.",
  },
  {
    title: "Bardage",
    image: "/services/cladding.jpg",
    description: "Définissez et protégez votre bâtiment avec nos services de bardage experts, spécialisés dans les finitions extérieures haute performance. Notre équipe s'engage à fournir un attrait esthétique saisissant associé à une durabilité et une résistance aux intempéries supérieures. Nous proposons une installation précise d'une large gamme de matériaux - des panneaux métalliques et composites modernes aux systèmes en pierre naturelle et en bois. Nous nous assurons que chaque projet de bardage fournit une enveloppe de bâtiment exceptionnelle, améliorant l'efficacité thermique, protégeant votre structure et maximisant son impact visuel et sa valeur à long terme.",
  },
  {
    title: "Électricité du bâtiment",
    image: "/services/building_electricity.jpg",
    description: "Alimentez votre propriété en toute sécurité et efficacement avec nos services experts en électricité du bâtiment. Notre équipe agréée s'engage à concevoir, installer et entretenir des systèmes électriques robustes pour les structures résidentielles et commerciales. Nous nous spécialisons dans le câblage complet, les mises à niveau de panneaux, l'éclairage écoénergétique et la conformité complète du système aux normes de sécurité en vigueur. Nous nous assurons que chaque projet électrique fournit une alimentation fiable, une sécurité maximale et des performances optimales, équipant votre bâtiment pour les demandes modernes et améliorant sa valeur à long terme.",
  },
  {
    title: "Plomberie",
    image: "/services/plumbing.jpg",
    description: "Assurez un débit d'eau impeccable dans toute votre propriété avec nos services de plomberie experts. Notre équipe certifiée s'engage dans l'installation, la réparation et l'entretien précis de tous les systèmes d'eau et de drainage. Nous nous spécialisons dans un service complet, de la détection de fuites détaillée et de l'installation de luminaires aux remplacements complets de systèmes pour les nouvelles constructions et les rénovations. Nous nous assurons que chaque projet de plomberie offre une fiabilité inégalée, une efficacité de l'eau et une conformité stricte aux normes de santé et de sécurité, protégeant votre bâtiment contre les défaillances essentielles de l'infrastructure.",
  },
  {
    title: "CVAC",
    image: "/services/hvac.jpg",
    description: "Maximisez le confort et la qualité de l'air avec nos services CVC experts. Nos techniciens certifiés s'engagent à concevoir, installer et entretenir des systèmes de climatisation à haute efficacité pour toute taille de propriété. Nous nous spécialisons dans les solutions complètes de chauffage, de refroidissement et de ventilation avancée, garantissant des performances constantes et une circulation d'air optimale. Nous nous assurons que chaque projet CVC offre une efficacité énergétique supérieure, une régulation de température fiable et un environnement intérieur sain, réduisant considérablement vos coûts d'exploitation et améliorant le confort des occupants.",
  },
  {
    title: "Jardinage",
    image: "/services/landscape.jpg",
    description: "Rehaussez votre présence extérieure avec nos services d'aménagement paysager experts, spécialisés dans la conception, l'installation et l'entretien transformateurs. Notre équipe s'engage à créer des environnements extérieurs magnifiques, durables et fonctionnels qui complètent votre architecture. Nous gérons chaque détail, de l'aménagement paysager et de la plantation à l'éclairage et aux systèmes d'irrigation. Nous nous assurons que chaque projet d'aménagement paysager améliore l'attrait de votre propriété, offre un espace de vie extérieur agréable et augmente considérablement sa valeur marchande globale.",
  },
];

export const getTranslatedServices = (locale: string): Service[] => {
  if (locale === 'fr') {
    return frServices;
  }
  return enServices;
};
