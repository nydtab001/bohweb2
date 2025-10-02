import { useLocation } from "react-router-dom";

export default function SearchResults({ allItems }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  const filteredResults = allItems.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Search Results for “{query}”</h2>
      {filteredResults.length > 0 ? (
        <ul className="space-y-4">
          {filteredResults.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} className="text-blue-900 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </section>
  );
}