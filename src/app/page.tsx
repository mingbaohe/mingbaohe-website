import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* 英雄区域 */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
          backgroundImage: "url('/hero-bg.jpg')"
        }}>
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  精密五金制造专家
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  深圳市铭宝和科技有限公司专注于精密五金制造，为客户提供高品质的精密连接器件、
                  模具设计制造及定制化加工服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 核心业务 */}
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">我们的核心业务</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                专业从事精密五金制造，为客户提供一站式解决方案
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    {/* 图标 */}
                  </div>
                  <h6 className="text-xl font-semibold">精密连接器件</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    专业生产精密连接线端子、连接弹片，应用于手机、储能、汽车电子等领域
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    {/* 图标 */}
                  </div>
                  <h6 className="text-xl font-semibold">模具设计制造</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    提供精密模具设计与制造服务，确保产品精度和质量
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    {/* 图标 */}
                  </div>
                  <h6 className="text-xl font-semibold">定制加工服务</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    提供车铣定制加工服务，满足客户个性化需求
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="relative bg-gray-800 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">深圳市铭宝和科技有限公司</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-400">
                创新科技，智领未来
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">联系我们</span>
                  <ul className="list-unstyled">
                    <li>
                      <span className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm">
                        电话：13544287865
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm">
                        邮箱：448274855@qq.com
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm">
                        地址：深圳市光明区公明街道上村社区思远路254号1栋5楼铭宝和
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 py-1">
                Copyright © {new Date().getFullYear()} 深圳市铭宝和科技有限公司
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 