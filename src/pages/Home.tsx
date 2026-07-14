import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="app">
      <h1>📱 Smart Guide</h1>

      <p>Helping you use your smartphone one step at a time.</p>

      <FeatureCard
        icon="📶"
        title="How to Connect to Wi-Fi"
        description="Learn how to connect turn on and off and connect to a specific wifi network"
      />

      <FeatureCard
        icon="📱"
        title="How to Use Mobile Data"
        description="Learn how to turn on and off mobile data and manage your data usage"
      />

      <FeatureCard
        icon="📞"
        title="How to Make a Phone Call"
        description="Learn how to make a phone call and manage your call settings"
      />

      <FeatureCard
        icon="👥"
        title="How to Find a Contact"
        description="Learn how to search for and view your contacts"
      />

      <FeatureCard
        icon="💬"
        title="How to Use WhatsApp"
        description="Learn how to send and receive messages on whatsapp"
      />
    </div>
  );
}

export default Home;