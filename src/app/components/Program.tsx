import { ProgramType } from "@/utils/parseYaml";
import SimpleRow from "./Program/SimpleRow";
import Hymn from "./Program/Hymn";
import Verses from "./Program/Verses";

const Program = ({ program }: { program: ProgramType[] }) => {
  return (
    <section className="w-full mb-16">
      <div className="text-3xl font-bold w-full text-center mb-4 underline underline-offset-4">
        <h2>婚證程序</h2>
      </div>

      <div className="w-full">
        {program.map((p) => {
          if (p.type === "simple") {
            return (
              <SimpleRow
                key={p.title}
                title={p.title}
                pic={p.pic}
                state={p.state}
              />
            );
          }

          if (p.type === "hymn") {
            return (
              <Hymn
                key={p.title}
                title={p.title}
                pic={p.pic}
                state={p.state}
                contents={p.content}
              />
            );
          }

          if (p.type === "verse") {
            return (
              <Verses
                key={p.title}
                title={p.title}
                pic={p.pic}
                state={p.state}
                content={p.content}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Program;
