import { Hymn } from "@/utils/parseYaml";

interface Content {
  title: string;
  content: string[];
}

const HymnContent = ({ content }: { content: Hymn }) => {
  return (
    <div className="mb-3">
      <div className="font-bold mb-1">
        <h4>{content.title}</h4>
      </div>
      <div className="">
        {content.text.map((c) => (
          <>
            {c}
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

const Hymn = ({
  title,
  pic,
  state,
  contents,
}: {
  title: string;
  pic: string;
  state: string;
  contents: Hymn[];
}) => {
  return (
    <article className="mb-8">
      <div className="flex justify-between">
        <div className="text-2xl font-bold grow-0">
          <h3>{title}</h3>
        </div>
        <div className="grow shrink flex-col px-3">
          <div className="h-1/2 w-full border-dotted border-b border-gray-600"></div>
          <div className="h-1/2 w-full"></div>
        </div>
        <div className="text-xl">{pic}</div>
      </div>
      <div className="flex justify-end">{state}</div>
      <div className="mt-3">
        {contents.map((c) => (
          <HymnContent key={c.title} content={c} />
        ))}
      </div>
    </article>
  );
};

export default Hymn;
