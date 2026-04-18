import { useMemo, useState } from "react";
import "./index.css";

const story = {
  title: "借来的舌头",
  subtitle: "单案件 Demo · 港口夜记",
  cards: [
    {
      name: "舌",
      meaning: "",
      omen: "舌头最先学会的，不一定是自己的名字。",
    },
    {
      name: "井",
      meaning: "",
      omen: "井里的水属于全城，所以谁往里落一粒盐，都会被看见。",
    },
    {
      name: "蜡板",
      meaning: "",
      omen: "写在蜡上的字能被抹平，可手记得曾经写过什么。",
    },
  ],
  pages: [
    {
      id: "page1",
      heading: "今夜来客",
      text:
        "他是在夜里来的，斗篷边缘带着海风吹干后的盐霜。手里夹着一块旧蜡板，指甲缝里还有没洗净的黑色蜡泥。这样的人你一看就知道，白天是替别人记账、誊写、核对封泥的。可他坐下以后，并没有立刻说自己犯了什么错，只低声问你：\"一个人若忽然说出自己从没学过的话，是神碰过他的舌头，还是热病把脑子烧坏了？\"\n\n他叫菲隆，港口文书，约二十二岁。前些日子发过一场高热，退烧后开始在梦里说陌生的话。有个从小亚细亚来的商人声称听懂了他的一句梦话，说那是自己家乡沿海的旧话。",
      question: "城里人真正怕的是什么？",
      options: [
        {
          text: "那舌头不是他自己的了。",
          tag: "city_fear",
        },
        {
          text: "井水会因此发苦。",
          tag: "temple_fear",
        },
        {
          text: "文书不该惹这种麻烦。",
          tag: "trouble_fear",
        },
      ],
    },
    {
      id: "page2",
      heading: "随后",
      text:
        "菲隆继续说，那句被人听懂的话是：\"不要把盐倒进井里。\"几天后，城里祭井边真的被人撒了盐，于是流言一下传开了。\n\n神庙那边想把他带去净身问话，仓库主人却抢先警告他少开口，别把外商和本地行会都惊动了。更怪的是，病后他不只是偶尔吐出异乡词句，有时甚至能先听出一个商人下一刻是要压价、发怒，还是装作和气。",
      question: "这些新线索照亮了什么？",
      options: [
        {
          text: "神庙、仓库主人和商人都想替他的嘴定一个用处。",
          tag: "control_mouth",
        },
        {
          text: "问题只在祭井那桩事，跟菲隆本人无关。",
          tag: "salt_only",
        },
        {
          text: "他多半只是偷学了几句外邦话。",
          tag: "simple_trick",
        },
      ],
    },
    {
      id: "page3",
      heading: "承认",
      text:
        "他沉默了很久，才终于承认，自己小时候就喜欢跟着父亲去码头听人说话。船一靠岸，不同地方的人就会吵起来：有人拖着长音，有人咬字像石子碰石子，有人一句话像唱出来似的。他那时最喜欢偷偷学，可只敢在没人的地方模仿，因为别人若听见，就会笑，说那不像正经男人，倒像学舌的鸟。\n\n\"后来父亲死在冬航里，家里就指着我识字这点本事过活。\"他说，\"我开始替别人记他们要卖的货、欠的债、送去别处的话。说久了，听久了，我倒越来越少说自己的。\"\n\n\"那场高热以后，我先是在梦里说，后来白天也会突然冒出来。我并不觉得自己学会了什么，倒像是从前那些落进耳朵、却没地方去的声音，一下都挤到了嘴边。\"",
      question: "听完他的自白，这件事该怎样定性？",
      options: [
        {
          text: "一个长期替别人听、替别人记的人，最后连自己的嘴也被那些声音改坏了。",
          tag: "human_change",
        },
        {
          text: "这是污秽，该交给神庙净身。",
          tag: "temple_judgment",
        },
        {
          text: "这是本事，该交给行会使用。",
          tag: "merchant_use",
        },
      ],
    },
  ],
  outcomes: {
    best:
      "你没有叫他去神庙，也没有劝他继续替仓库主人装聋作哑。你只是告诉他：若一张嘴总替别人记话、替别人留话，迟早会分不清哪一句才算自己的。既然如此，不如换一种活法，别再替人把秘密压在蜡板和账册里，而去做明白说话的人。\n\n他走的时候，把那块旧蜡板留在桌上，像是终于肯放下一只手。几个月后，有人说港口边多了个年轻人，替往来船只译写短信，也替不识字的水手给家里留话。他偶尔还是会在疲惫时蹦出陌生词句，但已经不再因此发抖。城里的人仍旧嫌外乡人吵、嫌口音杂、嫌神庙外的世界太宽，可菲隆在那片混杂里，终于替自己找到了一个位置。",
    mid:
      "你没有把他立刻推去神庙，也没有把他完全交给商人，只是劝他少说、少辩，先把这阵风头熬过去。菲隆点了点头，像是这本来就是他最熟悉的活法。\n\n后来流言果然慢慢散了，神庙没有正式传他，仓库主人也继续让他坐在货单和封泥之间。只是有人说，那个年轻文书从此说话越来越少，字倒写得比从前更稳。事情看似平息了，可他也重新缩回了那块小小的蜡板后面。",
    bad:
      "你让他去神庙，或是去向行会和商人证明自己的用处。起初人人都说这是好办法：若是神迹，就该由祭司辨明；若是本事，就该替城里挣钱。可一个人的嘴一旦成了众人都能围观、盘问、索取的东西，就很难再还给他自己。\n\n不久以后，港口里人人都知道那个会说异乡话的年轻文书。有人逼他重复怪句，有人拿不同地方的词去试他，有人盯着他像盯一只会学舌的鸟。到后来，连菲隆自己也越来越分不清，哪些话是病后忽然翻上来的，哪些只是别人想从他嘴里掏出来的。你听说他还活着，也还在开口，可那张嘴已经不再像是他的了。",
  },
};

function OptionButtons({ question, options, onChoose }) {
  return (
    <div className="field">
      <span>{question}</span>
      <div className="choice-list">
        {options.map((option) => (
          <button
            key={option.text}
            type="button"
            className="choice-btn"
            onClick={() => onChoose(option.tag)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const isEnding = pageIndex >= story.pages.length;
  const currentPage = story.pages[pageIndex];

  function handleChoose(tag) {
    const nextAnswers = [...answers, tag];
    setAnswers(nextAnswers);
    setPageIndex((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const endingText = useMemo(() => {
    const hasGoodCore =
      answers.includes("city_fear") &&
      answers.includes("control_mouth") &&
      answers.includes("human_change");

    const hasMixedCore =
      answers.includes("human_change") ||
      (answers.includes("city_fear") && answers.includes("control_mouth"));

    if (hasGoodCore) return story.outcomes.best;
    if (hasMixedCore) return story.outcomes.mid;
    return story.outcomes.bad;
  }, [answers]);

  function handleRestart() {
    setPageIndex(0);
    setAnswers([]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="app-shell">
      <header className="top-bar">
        <h1>{story.title}</h1>
        <div className="top-meta">{story.subtitle}</div>
      </header>

      <main className="main-grid">
        <section className="panel card-panel top-cards">
          <h2>港口的人说，有三样东西不该沾上别人的气息——</h2>
          <div className="card-list horizontal-cards">
            {story.cards.map((card) => (    
              <div key={card.name} className="symbol-card">
                <div className="symbol-name">{card.name}</div>
                <div className="symbol-omen">{card.omen}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel client-panel story-panel">
          {!isEnding ? (
            <>
              <h2>{currentPage.heading}</h2>
              <div className="client-card">
                <p className="story-text">{currentPage.text}</p>
              </div>
            </>
          ) : (
            <>
              <h2>随后</h2>
              <div className="client-card">
                <p className="story-text">{endingText}</p>
              </div>
            </>
          )}
        </section>

        <section className="panel judge-panel bottom-judge">
          {!isEnding ? (
            <>
              <h2>你的判断</h2>
              <OptionButtons
                question={currentPage.question}
                options={currentPage.options}
                onChoose={handleChoose}
              />
              <div className="result-box">
                <strong>推进方式：</strong>
                <p>点选一个判断，故事会直接往下走。</p>
              </div>
            </>
          ) : (
            <>
              <h2>一夜记录已成</h2>
              <div className="result-box final-result">
                <strong>结语：</strong>
                <p>
                  你替这件事定下了名字。名字一落下，人的去路也跟着变了。
                </p>
              </div>
              <button className="submit-btn" onClick={handleRestart}>
                重看此案
              </button>
            </>
          )}
        </section>
      </main>

      <footer className="status-bar">
        <div>夜色：深</div>
        <div>来客：一人</div>
        <div>记录：已成</div>
      </footer>
    </div>
  );
}