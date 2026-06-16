"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag, Folder } from "lucide-react";
import { notFound } from "next/navigation";
import { useGetBlogBySlugQuery } from "@/redux/features/blogApi";

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

function BlogContent({ content }) {
  if (!content) return null;
  const isHtml = content.trim().startsWith("<");
  if (isHtml) {
    return (
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  return (
    <div className="blog-content">
      {content.split("\n").map((line, i) =>
        line.trim() ? <p key={i}>{line}</p> : <br key={i} />
      )}
    </div>
  );
}

export default function BlogDetailPage({ params }) {
  const { slug } = use(params);
  const { data, isLoading, isError } = useGetBlogBySlugQuery(slug);

  const post = data?.data || data?.post || data;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Skeleton Hero */}
        <div className="w-full aspect-[21/8] bg-gray-100 animate-pulse" />
        <div className="w-full max-w-[800px] mx-auto px-6 py-16 space-y-6">
          <div className="h-5 bg-gray-100 rounded w-1/4 animate-pulse" />
          <div className="h-10 bg-gray-100 rounded w-3/4 animate-pulse" />
          <div className="h-10 bg-gray-100 rounded w-2/4 animate-pulse" />
          <div className="flex gap-4">
            <div className="h-4 bg-gray-100 rounded w-32 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-24 animate-pulse" />
          </div>
          <div className="space-y-3 pt-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`h-4 bg-gray-100 rounded animate-pulse ${i % 5 === 4 ? "w-2/3" : "w-full"}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError || !post || !post.title) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-white">
      {/* Cover Image */}
      {post.coverImage ? (
        <div className="w-full aspect-[21/8] relative overflow-hidden bg-gray-100">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      ) : (
        <div className="w-full h-[300px] bg-gradient-to-br from-[#650A33] to-[#1E1E1E] relative">
          <div className="absolute inset-0 opacity-20">
            <Image src="/Vector.png" alt="" fill className="object-cover" />
          </div>
        </div>
      )}

      {/* Article */}
      <article className="w-full max-w-[800px] mx-auto px-6 py-16">

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#650A33] transition-colors mb-10 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        {/* Category */}
        {post.category && (
          <Link
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#650A33]/10 text-[#650A33] px-4 py-1.5 rounded-full mb-5 hover:bg-[#650A33]/20 transition-colors"
          >
            <Folder size={11} />
            {post.category}
          </Link>
        )}

        {/* Title */}
        <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 leading-[1.2] tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-5 text-[12px] text-gray-400 font-medium pb-8 mb-8 border-b border-gray-100">
          {post.author && (
            <span className="flex items-center gap-1.5">
              <User size={13} />
              {post.author}
            </span>
          )}
          {post.publishedAt && (
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {formatDate(post.publishedAt)}
            </span>
          )}
        </div>

        {/* Content */}
        <BlogContent content={post.content} />

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex items-start gap-3 flex-wrap">
              <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                <Tag size={12} /> Tags:
              </span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-bold uppercase tracking-widest bg-[#F4F1EC] text-gray-600 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#650A33] transition-colors group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
          <Link
            href="/contact"
            className="bg-[#BA8C43] text-white px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#a17a39] transition-all"
          >
            Book a Suite
          </Link>
        </div>
      </article>
    </div>
  );
}
