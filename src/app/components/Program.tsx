import {
  SimpleRowProgram,
  HymnProgram,
  VerseProgram,
  ProgramType,
} from "@/utils/parseYaml";
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

        {/* <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>序樂</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">主禮人 新郎進場</div>
            </div>
            <div className="flex justify-end text-gray-800">
              眾坐
            </div>
          </article> */}

        {/* <SimpleRow title="序樂" pic="主禮人 新郎進場" state="眾坐" />

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>宣召</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">主席</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>婚樂</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">新娘步入禮堂</div>
            </div>
            <div className="flex justify-end">
              眾立
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>唱詩</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">會眾</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
            <div className="mt-3">
              <div className="mb-3">
                <div className="font-bold mb-1">
                  <h4>如此認識我</h4>
                </div>
                <div className="">
                  誰像你如此認識我？在我四周前後環繞我。 <br />
                  我奔跑、我躺臥、我坐下、<br />
                  我起來,全部你也細察清楚。 <br />
                  年月有如閃電飛過,但你的手從未離開過。 <br />
                  看春光、看艷陽、看落葉、看冰河，<br />
                  你右手總晝夜扶持著我! <br />
                  我在地上年日你已經數算過，<br />
                  你心底的意念如海沙那麼多；<br />
                  我在地極與天涯仍舊看顧著我<br />
                  這高深的愛可測得透麼？ <br />
                  迎面障礙雖避不過,但我有主同在能衝破。 <br />
                  有北風、有巨浪、有禍患、有艱難，<br />
                  我藏身主蔭下昂然步過。 <br />
                </div>
              </div>
              <div className="">
                <div className="font-bold mb-1">
                  <h4>恩典之路</h4>
                </div>
                <div className="">
                  你是我的主，引我走正義路。<br />
                  高山或低谷，都是你在保護。<br />
                  萬人中唯獨，你愛我認識我，<br />
                  永遠不變的應許，這一生都是祝福。<br />
                  一步又一步，這是恩典之路，<br />
                  你愛、你手，將我緊緊抓住。<br />
                  一步又一步，這是盼望之路，<br />
                  你愛、你手，牽引我走這人生路。<br />
                </div>
              </div>
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>祈禱</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">張露牧師</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>
                  讀經
                </h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">李雋瑋弟兄</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
            <div>
              <div className="mb-3">
                兩個人總比一個人好，因為二人勞碌同得美好的果效。 <br />
                <h4 className="mt-1">傳道書 4:9 </h4>
              </div>
              <div className="">
                但從起初創造的時候,神造人是造男造女。 <br />
                因此，人要離開父母,與妻子連合, 二人成為一體。 <br />
                既然如此，夫妻不再是兩個人，乃是一體的了。 <br />
                所以神配合的，人不可分開。 <br />
                <h4 className="mt-1">馬可福音 10:6-9</h4>
              </div>
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>訓勉</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">林偉明牧師</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>回應</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">會眾</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
            <div>
              <div className="mb-3">
                <div className="font-bold mb-1">全因為妳</div>
                <div className="">
                  常言道：人生像演戲， <br />
                  回看這生精彩：因有你， <br />
                  人在世永恆何在？ <br />
                  或如流星閃耀掠過，是你令我人生找到靠依。 <br />
                  死蔭幽谷中，你伴我過渡， <br />
                  歡欣裡，風光裡你共我同在； <br />
                  當身處孤單傷痛,來擁我入懷， <br />
                  你是我神，是我奇妙救恩。 <br />
                  全因為你，令我一生都佳美， <br />
                  你令我生命從空虛，化做傳奇； <br />
                  無論我壯如紅日，或如黃昏般漸漸老， <br />
                  是你令我如鷹般高飛。 <br />
                  全因為你，令我一生都佳美， <br />
                  你令我生命從空虛，化做傳奇； <br />
                  唯獨你是我拯救，我總不至死， <br />
                  直到永遠，從心底讚美！ <br />
                </div>
              </div>
            </div>
            <div className="">
              <div className="font-bold mb-1">恩典之路</div>
              <div className="">
                你是我的主，引我走正義路。 <br />
                高山或低谷，都是你在保護。 <br />
                萬人中唯獨，你愛我認識我， <br />
                永遠不變的應許，這一生都是祝福。<br />
                一步又一步，這是恩典之路， <br />
                你愛、你手，將我緊緊抓住。<br />
                一步又一步，這是盼望之路， <br />
                你愛、你手，牽引我走這人生路。<br />
              </div>
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>證婚</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">馮天聰牧師</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>祝福</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">林偉明牧師</div>
            </div>
            <div className="flex justify-end">
              眾立
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>禮成</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">新人步出禮堂</div>
            </div>
            <div className="flex justify-end">
              眾立
            </div>
          </article>

          <article className="mb-8">
            <div className="flex justify-between">
              <div className="text-2xl font-bold grow-0">
                <h3>致謝</h3>
              </div>
              <div className="grow shrink flex-col px-3">
                <div className="h-50 w-full border-dotted border-b border-gray-600"></div>
                <div className="h-50 w-full"></div>
              </div>
              <div className="text-xl">新人</div>
            </div>
            <div className="flex justify-end">
              眾坐
            </div>
          </article>*/}
      </div>
    </section>
  );
};

export default Program;
