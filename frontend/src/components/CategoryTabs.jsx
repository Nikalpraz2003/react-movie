import "../css/CategoryTabs.css";

function CategoryTabs({ activeCategory, onCategoryChange }) {
  const categories = [
    { id: "trending", label: "🔥 Trending" },
    { id: "movies", label: "🎬 Movies" },
    { id: "series", label: "📺 Series" }
  ];

  return (
    <div className="category-tabs">
      <div className="tabs-container">
        {categories.map(category => (
          <button
            key={category.id}
            className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;
