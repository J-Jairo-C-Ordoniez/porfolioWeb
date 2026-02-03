"use client";

import { useState } from "react";

import { ABtn } from "../atoms/Btn";
import MCardBlog from "../molecules/CardBlog";

export default function OBlog({ data }) {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? data : data.slice(0, 4);

  return (
    <>
      <div className="m-auto my-10 w-full px-5 space-y-6">
        {visibleBlogs.map((blog) => (
          <MCardBlog key={blog.id} data={blog} />
        ))}
      </div>

      {data.length > 4 && (
        <ABtn
          onClick={() => setShowAll(!showAll)}
          data={{
            text: showAll ? "Ver menos" : "Ver más",
            icon: showAll ? "PanelLeftOpen" : "PanelBottomOpen",
          }}
        />
      )}
    </>
  );
}
