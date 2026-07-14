import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="app">
      <h1>📱 Smart Guide</h1>

      <p>Helping you use your smartphone one step at a time.</p>

      <FeatureCard
        icon="📶"
        title="How to Connect to Wi-Fi"
      />

      <FeatureCard
        icon="📱"
        title="How to Use Mobile Data"
      />

      <FeatureCard
        icon="📞"
        title="How to Make a Phone Call"
      />

      <FeatureCard
        icon="👥"
        title="How to Find a Contact"
      />

      <FeatureCard
        icon="💬"
        title="How to Use WhatsApp"
      />
    </div>
  );
}

export default Home;