import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* 关于我们内容 */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">关于我们</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              深圳市铭宝和科技有限公司
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              专注于精密五金制造的高新技术企业
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* 公司简介 */}
              <div className="prose prose-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">公司简介</h3>
                <p className="text-gray-600">
                  深圳市铭宝和科技有限公司成立于2011年，是一家专业从事精密五金产品开发、模具设计制造、产品生产的高新技术企业。公司专注于精密连接线端子、连接弹片、车铣定制加工件的生产，产品广泛应用于手机连接器、储能设备、汽车电子、智能家居、电子机械设备、医疗器械等领域。
                </p>
                <p className="text-gray-600 mt-4">
                  十余年来，我们始终坚持以质量为本、创新为魂的发展理念，拥有先进的生产设备和专业的技术团队，在精密五金制造和模具开发领域积累了丰富的经验。通过持续的技术创新和质量管控，为客户提供高品质的产品和专业的定制化服务。
                </p>
              </div>

              {/* 企业文化 */}
              <div className="prose prose-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">企业文化</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">1</span>
                    <p className="ml-4 text-gray-600">
                      <strong className="text-gray-900">使命：</strong>
                      以精密制造推动产业发展，为客户创造价值
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">2</span>
                    <p className="ml-4 text-gray-600">
                      <strong className="text-gray-900">愿景：</strong>
                      成为精密五金制造行业的领先企业
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">3</span>
                    <p className="ml-4 text-gray-600">
                      <strong className="text-gray-900">价值观：</strong>
                      精益求精、诚信为本、创新发展、合作共赢
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 发展历程 */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">发展历程</h3>
              <div className="border-l-2 border-primary ml-4">
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-2">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-gray-900 font-semibold">2011年</div>
                  <div className="text-gray-600">公司成立，开始专注于精密五金制造领域</div>
                </div>
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-2">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-gray-900 font-semibold">2015年</div>
                  <div className="text-gray-600">引进先进生产设备，扩大生产规模，获得ISO9001质量管理体系认证</div>
                </div>
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-2">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-gray-900 font-semibold">2018年</div>
                  <div className="text-gray-600">成功开发多项核心技术，获得多项专利，建立完善的质量管理体系</div>
                </div>
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-2">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-gray-900 font-semibold">2021年</div>
                  <div className="text-gray-600">成功进入新能源汽车和储能设备供应链，产品获得行业认可</div>
                </div>
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-2">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-gray-900 font-semibold">2023年</div>
                  <div className="text-gray-600">深圳总部成立，建立现代化生产基地，进一步提升生产能力和服务质量</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 