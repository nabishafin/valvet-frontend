"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useGetBlogsQuery } from "@/redux/features/blogApi";
import PageHero from "@/components/shared/PageHero";

function formatDate(dateString) {
  if (!dateString) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

function BlogCard({ post }) {
  return (
    <article className="group flex flex-col h-full">
      {/* Cover Image */}
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-100">
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#650A33]/10 to-[#BA8C43]/10 flex items-center justify-center">
              <span className="text-[#650A33]/30 font-playfair text-4xl italic">V</span>
            </div>
          )}
        </div>
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3">
        {post.category && (
          <span className="text-[10px] font-bold uppercase tracking-widest bg-[#650A33]/10 text-[#650A33] px-3 py-1 rounded-full">
            {post.category}
          </span>
        )}
        {post.publishedAt && (
          <span className="text-[11px] text-gray-400 font-medium">{formatDate(post.publishedAt)}</span>
        )}
      </div>

      {/* Title */}
      <Link href={`/blog/${post.slug}`}>
        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#650A33] transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
      )}

      {/* Author + Read More */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
        {post.author && (
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            By {post.author}
          </span>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-[#650A33] uppercase tracking-widest group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}

function CardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-4">
      <div className="w-full aspect-[16/10] bg-gray-100 rounded-2xl" />
      <div className="flex gap-2">
        <div className="h-5 w-20 bg-gray-100 rounded-full" />
        <div className="h-5 w-24 bg-gray-100 rounded-full" />
      </div>
      <div className="space-y-2">
        <div className="h-5 bg-gray-100 rounded w-4/5" />
        <div className="h-5 bg-gray-100 rounded w-3/5" />
      </div>
      <div className="h-4 bg-gray-100 rounded" />
      <div className="h-4 bg-gray-100 rounded w-4/5" />
    </div>
  );
}

export default function BlogPage() {
  const [searchInput, setSearchInput] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  // Keep the first-ever category list stable so pills don't disappear when filtering
  const categoryListRef = useRef([]);

  const { data, isLoading, isFetching, isError } = useGetBlogsQuery({
    page,
    limit: 9,
    search: activeSearch,
    category,
  });

  const posts = data?.data?.posts || [];
  const pagination = data?.data?.pagination || {};

  // Populate category list once from any successful response
  useEffect(() => {
    if (posts.length > 0 && categoryListRef.current.length === 0) {
      const cats = [...new Set(posts.map((p) => p.category).filter(Boolean))];
      if (cats.length > 0) categoryListRef.current = cats;
    }
  }, [posts]);

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveSearch(searchInput.trim());
    setPage(1);
  };

  const handleCategoryToggle = (cat) => {
    setCategory((prev) => (prev === cat ? "" : cat));
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setActiveSearch("");
    setCategory("");
    setPage(1);
  };

  const hasActiveFilters = activeSearch || category;

  return (
    <div className="flex flex-col">
      <PageHero
        title="The Blog"
        subtitle="INSIGHTS & INSPIRATION"
        bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80&auto=format&fit=crop"
        position="center center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Search + Filter Bar */}
      <section className="bg-[#F4F1EC] py-8 border-b border-gray-200/50">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex items-center gap-0 w-full md:max-w-sm">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 bg-white border border-gray-200 border-r-0 rounded-l-full py-3 px-5 text-sm focus:outline-none focus:border-[#650A33] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#650A33] text-white px-5 py-3 rounded-r-full hover:bg-[#4d0826] transition-colors"
              >
                <Search size={16} />
              </button>
            </form>

            {/* Category Pills */}
            {categoryListRef.current.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryToggle("")}
                  className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                    !category
                      ? "bg-[#650A33] text-white border-[#650A33]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#650A33] hover:text-[#650A33]"
                  }`}
                >
                  All
                </button>
                {categoryListRef.current.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryToggle(cat)}
                    className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                      category === cat
                        ? "bg-[#650A33] text-white border-[#650A33]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#650A33] hover:text-[#650A33]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Clear */}
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="text-[11px] text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors whitespace-nowrap ml-auto"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Active filter labels */}
          {hasActiveFilters && (
            <p className="text-[11px] text-gray-500 mt-3">
              {activeSearch && <>Searching: <strong>&ldquo;{activeSearch}&rdquo;</strong></>}
              {activeSearch && category && " · "}
              {category && <>Category: <strong>{category}</strong></>}
              {pagination.total !== undefined && (
                <> · {pagination.total} result{pagination.total !== 1 ? "s" : ""}</>
              )}
            </p>
          )}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">

          {/* Loading */}
          {(isLoading || isFetching) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[...Array(9)].map((_, i) => <CardSkeleton key={i} />)}
            </div>
          )}

          {/* Error */}
          {isError && !isLoading && (
            <div className="text-center py-24 space-y-4">
              <p className="text-gray-400 text-lg">Failed to load posts.</p>
              <button
                onClick={() => window.location.reload()}
                className="text-[#650A33] underline text-sm font-bold"
              >
                Try again
              </button>
            </div>
          )}

          {/* Empty */}
          {!isLoading && !isFetching && !isError && posts.length === 0 && (
            <div className="text-center py-24 space-y-4">
              <p className="font-playfair text-3xl text-gray-300 italic">No posts found.</p>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-[#650A33] underline text-sm font-bold"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

          {/* Posts */}
          {!isLoading && !isFetching && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post, idx) => (
                <BlogCard key={post._id || post.slug || idx} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {!isLoading && !isError && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-16">
              <button
                onClick={() => setPage((p) => p - 1)}
                disabled={!pagination.hasPrev || isFetching}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[11px] font-bold uppercase tracking-widest text-gray-600 hover:border-[#650A33] hover:text-[#650A33] transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft size={14} /> Previous
              </button>

              <div className="flex items-center gap-2">
                {[...Array(pagination.totalPages)].map((_, i) => {
                  const p = i + 1;
                  // Show first, last, current ±1, and ellipsis
                  const show =
                    p === 1 ||
                    p === pagination.totalPages ||
                    Math.abs(p - page) <= 1;
                  const isEllipsisBefore =
                    p === 2 && page > 4;
                  const isEllipsisAfter =
                    p === pagination.totalPages - 1 && page < pagination.totalPages - 3;
                  if (isEllipsisBefore || isEllipsisAfter) {
                    return <span key={p} className="text-gray-300 text-sm px-1">…</span>;
                  }
                  if (!show) return null;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      disabled={isFetching}
                      className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${
                        p === page
                          ? "bg-[#650A33] text-white"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={!pagination.hasNext || isFetching}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[11px] font-bold uppercase tracking-widest text-gray-600 hover:border-[#650A33] hover:text-[#650A33] transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
