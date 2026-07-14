type FeatureCardProps = {
  icon: string;
  title: string;
};

function FeatureCard({ icon, title }: FeatureCardProps) {
  return (
    <button className="feature-card">
      <span className="feature-icon">{icon}</span>
      <span>{title}</span>
    </button>
  );
}

export default FeatureCard;