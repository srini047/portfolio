import React from "react";

const BlogPost = (props) => {
  var values = props.tags.map(function (value, i) {
    return <p># {value}</p>;
  });
  return (
    <div className="blog bg-black text-white py-8 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-1 gap-10 px-4 sm:px-6 md:px-8">
        <div className="card border border-white text-center p-6 sm:p-10 hover:bg-blue-900">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">{props.title}</h2>
          <span className="bar border-b border-white w-1/2 mx-auto my-4 block"></span>
          <h3 className="text-base sm:text-lg">
            <i>{props.platform}</i>
          </h3>
          <span className="bar border-b border-white w-1/2 mx-auto my-4 block"></span>
          <p className="py-2">{values}</p>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="btn block w-64 sm:w-80 mx-auto mt-4 sm:mt-8"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
