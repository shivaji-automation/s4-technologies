export default function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}