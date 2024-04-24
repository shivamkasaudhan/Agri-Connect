import React from 'react';

function BlogPage() {
  // Sample blog data
  const blogs = [
    {
      title: "First Blog Post",
      content: "Lorem ipsum dolor sit amet,  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga pconsectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    },
    {
      title: "Second Blog Post",
      content: "Lorem ipsum dolor sit amet,  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
    },
    // Add more blog objects as needed
    {
        title: "Third Blog Post",
        content: "Lorem ipsum dolor sit amet,  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      },
      {
        title: "Second Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p Sed cursus ante dapibus diam. Sed nisi."
      },
      {
        title: "Second Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p cursus ante dapibus diam. dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p Sed nisi."
      },
      {
        title: "Second Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p pInteger nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      },
      {
        title: "Second Blog Post",
        content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga pariatur similique! Ipsum, unde. Possimus dolorum quibusdam sequi rem vel fugiat voluptates facere nobis, ducimus, necessitatibus quos repellendus labore? Ullam quam, ducimus commodi ad soluta dolorum, odit dolorem aliquid dolore alias natus molestiae recusandae."
      },
      {
        title: "Second Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus d dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elitiam. Sed nisi."
      },
      {
        title: "Second Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.  dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit. Rerum eum earum eaque sit porro, quibusdam fuga p dolor sit, amet consectetur adipisicing elit Sed cursus ante dapibus diam. Sed nisi."
      }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2 text-primary">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
