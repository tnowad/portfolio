import ReactHtmlParser from "react-html-parser";

import "./style.css";

export default function Markdown({ html }: { html: string }) {
  return <div className="markdown-body">{ReactHtmlParser(html)}</div>;
}
