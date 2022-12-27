import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Accordion from "components/accordion";
import Image from "next/legacy/image";
import eyecatch from "images/about.jpg";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>このサイトについて</h2>
            <p>
              このサイトはJavascript,React,Next.jsで構成されています。スタイルはCSS
              Modulesやstyled-jsxを使用しています。また、記事データの管理にはヘッドレスCMSのmicroCMSを利用しています。
            </p>
            <p>
              制作時に意識した点として2つあります。まず、できるだけシンプルなデザインのサイトになるよう設計をした事です。余計な情報はなるべく省き、ユーザーに見てほしい情報だけを入れるようサイトの構成に工夫をしました。次に、レスポンシブ対応を行った事です。モバイルでもPC使用時と同じような使い勝手になるように、設計を決めて開発を行いました。
            </p>
            <h3>今後挑戦したいこと</h3>
            <p>
              サイトをアップデートして、様々な機能を追加していきたいです。具体的には、記事データを「記事名＋日付」で表示させること、記事データのカテゴリをユーザーに分かりやすくするために「カテゴリ」欄を追加すること、一部記述が分かりにくくなってしまったコードの修正、記事読み込み速度の改善などに取り組みたいです。
            </p>

            <h2>FAQ</h2>
            <Accordion heading="サイト名について">
              <p>ある時学習したものを振り返りたいと思い、学習したことを記録するためにこのサイトを作りました。アウトプットを記録するので、「OutPut」という名前を付けました。</p>
            </Accordion>
            <Accordion heading="開発期間">
              <p>約2か月で開発を行いました。</p>
            </Accordion>
            <Accordion heading="ホスティングサービス">
              <p>ホスティングサービスはVercelを使用しています。</p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
