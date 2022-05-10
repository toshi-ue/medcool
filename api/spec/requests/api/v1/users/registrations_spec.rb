# frozen_string_literal: true

require 'rails_helper'

# 以下を参考にして書く
#   [RSpec の便利な機能を使って、わかりやすく簡潔な API のテストを書こう！ - Qiita](https://qiita.com/taka4/items/cf1a24a292906b188947)
#   [読みやすいRSpecを書くためのTips - 弥生開発者ブログ](https://tech-blog.yayoi-kk.co.jp/entry/2016/08/26/105720)
#   [RSpecでAPIのレスポンスボディのプロパティを検証する方法 | Enjoy IT Life](https://nishinatoshiharu.com/rspec-response-confirm/)
# 以下は除外
#   [RSpecを綺麗に書くための基本Rule - Qiita](https://qiita.com/geshi/items/556179cc6a277efb4f99)
#   [【Rails】APIテストの書き方 - Qiita](https://qiita.com/k-penguin-sato/items/defdb828bd54729272ad)

RSpec.describe 'Api::V1::Users::Registrations', type: :request do
  subject(:post_user) { post api_v1_users_registrations_path, params: { user: user_params } }

  let(:json) { JSON.parse(response.body) }
  let!(:first_user) { create(:user) }

  describe 'POST /create' do
    context 'OK' do
      let(:user_params) { attributes_for(:user) }

      it { expect(post_user).to eq 201 }
      it { expect { post_user }.to change(User, :count).by(1) }
      # TODO: データの検証をしたい
      # https://techracho.bpsinc.jp/takaneko/2018_12_13/66538
      # https://qiita.com/taka4/items/cf1a24a292906b188947
    end

    context 'NG' do
      context 'emailがすでに登録されているとき' do
        let(:user_params) { attributes_for(:user, email: first_user.email) }

        it { expect(post_user).to eq 400 }
        it { expect { post_user }.not_to change(User, :count) }

        it do
          post_user
          expect(json).to include('メールアドレスはすでに存在します')
        end
      end

      context 'uidがすでに登録されているとき' do
        let(:user_params) { attributes_for(:user, uid: first_user.uid) }

        it { expect(post_user).to eq 400 }
        it { expect { post_user }.not_to change(User, :count) }
      end
    end
  end
end
