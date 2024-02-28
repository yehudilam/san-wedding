import { Verse } from "@/utils/parseYaml";

const Verses = ({
  title,
  pic,
  state,
  content,
}: {
  title: string;
  pic: string;
  state: string;
  content: Verse[];
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
      <div>
        {content.map((c) => {
          return (
            <div className="mb-3" key={c.title}>
              {c.text.map((c) => (
                <>
                  {c}
                  <br />
                </>
              ))}
              <h4 className="mt-1 font-bold">{c.title}</h4>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Verses;
