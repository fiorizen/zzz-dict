import { DictBase } from '../../dict';

export default {
  category: 'アイテム',
  title: '素材',
  hinshi: '普通名詞',
  items: [
    // ボンプ最適化素材
    { kana: 'えーてるでんかいえき', word: 'エーテル電解液' },
    { kana: 'えねるぎーじゅんかんえき', word: 'エネルギー循環液' },
    { kana: 'のうしゅくがたれいきゃくえき', word: '濃縮型冷却液' },

    // ドライバ調律素材
    { kana: 'おんしつぶーすとげんばん', word: '音質ブースト原盤' },
    { kana: 'のいずていげんげんばん', word: 'ノイズ低減原盤' },
    { kana: 'はいふぁいげんばん', word: 'Hi-Fi原盤' },

    // コアスキル強化素材
    { kana: 'さつりくをつかむてのひら', word: '殺戮を掴む掌' },
    { kana: 'かっせいどらいぶ', word: '活性ドライブ' },
    { kana: 'しゅうまくのだんすしゅーず', word: '終幕のダンスシューズ' },
    // TODO: エージェント経験素材
    // TODO: 音動機経験素材
    // TODO: ドライバ経験素材
    // TODO: ボンプ経験素材
  ],
} as DictBase;
