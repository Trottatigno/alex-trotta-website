type CustomMDXProps = {
  source: string;
};

import { remark } from "remark";
import html from "remark-html";

export async function CustomMDX({ source }: CustomMDXProps) {
  const processed = await remark().use(html).process(source);

  return (
    <div
      style={{ lineHeight: "2" }}
      dangerouslySetInnerHTML={{ __html: processed.toString() }}
    />
  );
}
