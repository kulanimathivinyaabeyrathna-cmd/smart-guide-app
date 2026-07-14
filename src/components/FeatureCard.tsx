type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description
 }: FeatureCardProps) {
  return (
    <button className="feature-card">
      <span className="feature-icon">{icon}</span>
      <span>{title}</span>
      <p>{description}</p>
    </button>
  );
}

export default FeatureCard;