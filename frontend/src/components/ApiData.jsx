import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext.jsx";

const ApiData = () => {
  const { theme } = useTheme();
  const [allPosts, setAllPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const perLoad = 1; // Load one post at a time for smooth scroll

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://dummyjson.com/posts?limit=150");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const json = await res.json();
        const posts = Array.isArray(json.posts) ? json.posts : [];
        setAllPosts(posts);
        setHasMore(posts.length > 0);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Infinite scroll observer
  const observer = useRef();
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((v) => {
            const next = v + perLoad;
            if (next >= allPosts.length) setHasMore(false);
            return next;
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, allPosts.length]
  );

  const visiblePostsRaw = allPosts.slice(0, visibleCount);
  const visiblePosts = visiblePostsRaw.filter((p) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.body && p.body.toLowerCase().includes(q))
    );
  });

  return (
    <div
      className={`rounded-2xl shadow-lg p-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-100"
          : "bg-blue-100 text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Infinite Post Feed</h2>

      {/* Search */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search posts by title or body..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full max-w-xl px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              : "bg-blue-50 border-blue-200 text-gray-900 placeholder-gray-600"
          }`}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-center text-red-500 mb-4">Error: {error}</p>
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visiblePosts.map((post, idx) => {
          const isLast = idx === visiblePosts.length - 1;
          return (
            <div
              key={post.id}
              ref={isLast ? lastItemRef : null}
              className={`rounded-xl p-4 shadow-md border transition-all duration-500 transform hover:scale-[1.01] hover:shadow-lg ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-100"
                  : "bg-blue-50 border-blue-200 hover:bg-blue-100 text-gray-900"
              } animate-fadeIn`}
              style={{
                animation: "fadeIn 0.5s ease-in",
              }}
            >
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-sm leading-relaxed">{post.body}</p>
            </div>
          );
        })}
      </div>

      {/* Loading indicator */}
      {loading && (
        <p className="text-center text-blue-600 dark:text-blue-300 mt-4">
          Loading posts...
        </p>
      )}

      {/* No results */}
      {!loading && visiblePosts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No posts found.
        </p>
      )}

      {/* End message */}
      {!hasMore && !loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          You’ve reached the end.
        </p>
      )}
    </div>
  );
};

export default ApiData;
