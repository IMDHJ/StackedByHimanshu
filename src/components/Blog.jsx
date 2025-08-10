import React from 'react'
const posts = [
  {
    id: 1,
    title: "Understanding Options Trading in India",
    date: "Aug 5, 2025",
    tag: "Stock Market",
    link: "#",
  },
  {
    id: 2,
    title: "How I Use AI to Supercharge Small Projects",
    date: "July 12, 2025",
    tag: "AI",
    link: "#",
  },
];
const Blog = () => {
  return (
    <div>
      {/* Blog highlights */}
      <section id="blog" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold">Blog</h3>
          <a href="/blog" className="text-indigo-600 text-sm sm:text-base">Read all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {posts.map((post) => (
            <div key={post.id} className="rounded-2xl bg-white p-4 sm:p-6 shadow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">{post.title}</h4>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">{post.date} · {post.tag}</div>
                </div>
                <a href={post.link} className="text-indigo-600 text-xs sm:text-sm mt-2 sm:mt-0">Read</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
