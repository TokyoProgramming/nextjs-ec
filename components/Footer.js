import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex-cols">
      <div className="grid grid-cols-1 xl:grid-cols-3 bg-gray-100">
        {/* column 1 */}
        <div className="flex-cols mx-5 p-5">
          <div className="flex justify-center items-center p-3 font-bold ">
            <h1 className="text-3xl leading-8 tracking-wide">
              配送・送料について
            </h1>
          </div>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex-cols ">
            <div className="mt-5">
              <h1 className="text-2xl">送料</h1>
            </div>
            <div className="mt-5">
              <h1 className="text-xl leading-8 tracking-wide">
                送料：全国送料無料。但し、北海道・沖縄・離島は別途５５０円かかります。
              </h1>
            </div>
          </div>
          <div className="flex-cols mt-10">
            <div className="mt-5">
              <h1 className="text-2xl leading-8 tracking-wide">
                ヤマト運輸（クール宅急便）
              </h1>
            </div>
            <div className=""></div>
            <div className="">
              <p className="text-xl mt-5 leading-8 tracking-wide">
                ※降雪や強風による交通規制やフェリー・JRの遅れ等により、全国的にお荷物のお届けに遅れが生じております。
                　お届けご希望日時に間に合わない場合は、ご了承ください。
                ※冷凍でのお届けとなります。
                ※焼きチョコにつきましては、冷凍品と一緒にお届けすることができません.。
                ※配送は、国内に限り承っております。
              </p>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl leading-8 tracking-wide">
                ＜お届け日時の指定＞
              </h1>
            </div>
            <div className="flex-cols mt-5">
              <p className="text-xl leading-8 tracking-wide">・午前中</p>
              <p className="text-xl leading-8 tracking-wide">・14時－16時</p>
              <p className="text-xl leading-8 tracking-wide">・16時－18時 </p>
              <p className="text-xl leading-8 tracking-wide">・18時－20時</p>
              <p className="text-xl leading-8 tracking-wide"> ・20時－21時</p>
              <p className="mt-10 leading-8 tracking-wide">
                上記の時間帯よるご希望をお選び頂けます。
              </p>
            </div>
          </div>
          <div className="flex-cols mt-10">
            <div className="">
              <h1 className="text-2xl">ヤマト運輸（クロネコヤマト宅急便)</h1>
            </div>
            <div className=""></div>
            <div className="mt-5">
              <p className="text-xl leading-8 tracking-wide">
                ※降雪や強風による交通規制やフェリー・JRの遅れ等により、全国的にお荷物のお届けに遅れが生じております。
                　お届けご希望日時に間に合わない場合は、ご了承ください。
                ※冷凍でのお届けとなります。
                ※焼きチョコにつきましては、冷凍品と一緒にお届けすることができません.。
                ※配送は、国内に限り承っております。
              </p>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl leading-8 tracking-wide">
                ＜お届け日時の指定＞
              </h1>
            </div>
            <div className="flex-cols mt-5">
              <p className="text-xl leading-8 tracking-wide">・午前中</p>
              <p className="text-xl leading-8 tracking-wide">・14時－16時</p>
              <p className="text-xl leading-8 tracking-wide">・16時－18時 </p>
              <p className="text-xl leading-8 tracking-wide">・18時－20時</p>
              <p className="text-xl leading-8 tracking-wide"> ・20時－21時</p>
              <p className="mt-5 leading-8 tracking-wide">
                上記の時間帯よるご希望をお選び頂けます。
              </p>
              <div className="flex-cols mt-5">
                <h1 className="leading-8 tracking-wide">翌日配達要件</h1>
                <p className="leading-8 tracking-wide">
                  ※翌日配達をご希望の場合は、翌日配達要件をご確認下さい。
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* columns2 */}
        <div className="flex-cols mx-5 p-5">
          <div className="flex justify-center items-center p-3 font-bold ">
            <h1 className="text-3xl leading-8 tracking-wide">
              支払い方法について
            </h1>
          </div>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex-cols ">
            <div className="mt-5">
              <h1 className="text-2xl">クレジット決済（PayPal)</h1>
            </div>
            <div className="mt-5">
              <h1 className="text-xl leading-8 tracking-wide">
                PayPal（ペイパル）とは
                クレジットカード、デビットカードを登録するか、銀行の口座振替設定を行うだけで、
                IDとパスワードのみでの取引が可能に。
                お支払い情報をお店側に伝えることなく安全にご利用いただけます。
              </h1>
            </div>
            <div className="mt-10 flex-cols">
              <p className="text-xl leading-8 tracking-wide">
                VISA、MASTER、DINERS、JCB、AMEXのクレジットカードをご利用頂けます。
              </p>
              <p className="mt-10 text-xl leading-8 tracking-wide">
                お支払い手数料は無料です。
              </p>
            </div>
          </div>
          <div className="flex-cols mt-10">
            <div className="mt-5">
              <h1 className="text-2xl leading-8 tracking-wide">クレジット</h1>
            </div>
            <div className=""></div>
            <div className="flex-cols ">
              <p className="text-xl mt-5 leading-8 tracking-wide">
                『クレジットカード決済』はクレジットカード決済代行のイプシロン株式会社
                の決済代行システムを利用しております。
              </p>
              <p className="mt-5 text-xl mt-5 leading-8 tracking-wide">
                ご注文後、イプシロン決済画面へ移動いたしますので決済を完了させてください。
                安心してお支払いをしていただくために、
                お客様の情報がイプシロンサイト経由で送信される際にはSSL(128bit)による暗号化通信で行い、
                クレジットカード情報は当サイトでは保有せず、同社で厳重に管理しております。
              </p>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl leading-8 tracking-wide">
                ＜お届け日時の指定＞
              </h1>
            </div>
            <div className="flex-cols mt-5">
              <p className="text-xl leading-8 tracking-wide">・午前中</p>
              <p className="text-xl leading-8 tracking-wide">・14時－16時</p>
              <p className="text-xl leading-8 tracking-wide">・16時－18時 </p>
              <p className="text-xl leading-8 tracking-wide">・18時－20時</p>
              <p className="text-xl leading-8 tracking-wide"> ・20時－21時</p>
              <p className="mt-10  text-xl leading-8 tracking-wide">
                上記の時間帯よるご希望をお選び頂けます。
              </p>
            </div>
          </div>
          <div className="flex-cols mt-10">
            <div className="">
              <h1 className="text-2xl">銀行振込</h1>
            </div>
            <div className=""></div>
            <div className="mt-5">
              <p className="text-xl leading-8 tracking-wide">
                ご注文の際に登録をされますメールが、携帯アドレス
                （docomo,au,softbank）等ですと、弊社からの自動返信の
                メールが迷惑メールとなって、お振込みいただきます銀行口座が
                御覧いただけないケースが多いいです。
                order@flavors-kyoto.com　のアドレスが迷惑メールにならないように
                設定をいただきますようお願い致します。
                また、出荷につきましては、ご入金確認後の出荷となります。
              </p>
            </div>
          </div>

          <div className="flex-cols mt-10">
            <div className="">
              <h1 className="text-2xl">全額ポイント利用</h1>
            </div>

            <div className="mt-5">
              <p className="text-xl leading-8 tracking-wide">
                全額をポイントでお支払いの時に選択してください。
                当店では、ショップポイント、GMOとくとくポイントをご利用いただけます。
              </p>
            </div>
          </div>
        </div>
        {/* columns 3 */}
        <div className="flex-cols mx-5 p-5">
          <div className="flex justify-center items-center p-3 font-bold ">
            <h1 className="text-3xl leading-8 tracking-wide">営業日について</h1>
          </div>
          <div className="w-full border-t border-gray-300"></div>

          <div className="p-3 mt-5 flex justify-center">
            <Calendar />
          </div>
          <div className="p-3 mt-5 flex justify-center">
            <Calendar />
          </div>
        </div>
      </div>
      <div className="bg-[#57481B] p-5">
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <div className="flex-cols mx-auto">
            <div className=" mt-10 p-3">
              <h1 className="text-[#F4FFFF] text-3xl ml-3">
                当店オーナーよりひと言♪
              </h1>
            </div>
            <div className="mt-5 ml-3">
              <h1 className="text-white text-2xl leading-8 tracking-wide">
                『京都の洋菓子店です』
              </h1>
            </div>
            <div className="mt-5">
              <p className="text-white text-2xl leading-10 tracking-widest">
                日本ギフト大賞京都賞を受賞した抹茶のミルクレープロールをはじめ、数種類のミルクレープロール取り揃えております。
                また、メディアにも数多く紹介された、フレーバーズ開店以来の人気商品、京都錦ろーるや缶入りの焼きチョコなど
                ユニークで美味しいスイーツを皆様にご提供することが私たちの幸せです。
                どうかこの機会にフレーバーズのスイーツを大切な方とご一緒にいかがですか！
              </p>
            </div>
          </div>
          <div className="flex-cols mx-auto">
            <div className="mt-10 p-3">
              <h1 className="text-white text-3xl ml-3">MORE INFO</h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <div className="flex-cols mx-auto my-auto mt-5 space-y-5">
                <p
                  className="text-2xl text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  ホーム
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  お支払い方法について
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
               hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  配送方法・送料について
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  翌日配達要件について
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  特定商取引法に基づく表記
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  公式ホームページ
                </p>
              </div>
              <div
                className="flex-cols my-auto mt-5
            space-y-5"
              >
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  マイアカウント
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  会員登録
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  ログイン
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  メルマガ登録・解除
                </p>
                <p
                  className="text-2xl  text-white leading-10 tracking-widest
              hover:underline underline-offset-4 hover:cursor-pointer"
                >
                  RSS / ATOM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 flex justify-center">
          <div className="flex">
            <p className="mx-3">
              <FaInstagram
                className="text-4xl text-white 
               hover:text-gray-200 hover:cursor-pointer"
              />{" "}
            </p>
            <p className="mx-3">
              <FaFacebookF
                className="text-4xl text-white
               hover:text-gray-200 hover:cursor-pointer"
              />
            </p>
          </div>
        </div>
        <div className="w-full border-t border-gray-300"></div>
        <div className="flex justify-center items-center mt-3">
          <p className="text-2xl text-white leading-10 tracking-widest">
            Copyright &#169;
          </p>
        </div>
      </div>
    </footer>
  );
}
