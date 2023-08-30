"use client";
import Giscus from "@giscus/react";

export default function Page() {
  return (
    <div>
      <Giscus
        id="comments"
        repo="tnowad/portfolio"
        categoryId="D_kwDOJsxOkc4AUsPj"
        mapping="specific"
        term=""
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
        repoId={""}
      />
    </div>
  );
}
