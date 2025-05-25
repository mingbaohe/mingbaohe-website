import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Products() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* 产品服务内容 */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">我们的产品与服务</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              精密五金制造专家
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              专业从事精密五金制造，为客户提供从设计、开发到生产的一站式解决方案
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* 产品1 */}
              <div className="relative rounded-lg border border-gray-200 p-8 shadow-sm">
                <div className="absolute -top-4">
                  <span className="inline-flex rounded-full bg-primary p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">精密连接器件</h3>
                  <p className="mt-2 text-base text-gray-500">
                    专业生产精密连接线端子、连接弹片等，广泛应用于手机连接器、储能设备、汽车电子等领域。
                  </p>
                  <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                    <li>手机连接器端子</li>
                    <li>储能设备连接件</li>
                    <li>汽车电子连接器</li>
                    <li>智能家居连接件</li>
                  </ul>
                </div>
              </div>

              {/* 产品2 */}
              <div className="relative rounded-lg border border-gray-200 p-8 shadow-sm">
                <div className="absolute -top-4">
                  <span className="inline-flex rounded-full bg-primary p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">模具设计制造</h3>
                  <p className="mt-2 text-base text-gray-500">
                    提供精密模具设计与制造服务，确保产品精度和质量，满足各类精密五金制造需求。
                  </p>
                  <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                    <li>精密冲压模具</li>
                    <li>注塑模具设计</li>
                    <li>模具制造维护</li>
                    <li>模具优化升级</li>
                  </ul>
                </div>
              </div>

              {/* 产品3 */}
              <div className="relative rounded-lg border border-gray-200 p-8 shadow-sm">
                <div className="absolute -top-4">
                  <span className="inline-flex rounded-full bg-primary p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">定制加工服务</h3>
                  <p className="mt-2 text-base text-gray-500">
                    提供车铣定制加工服务，可根据客户需求进行个性化定制，提供一站式解决方案。
                  </p>
                  <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                    <li>医疗器械零件</li>
                    <li>电子设备配件</li>
                    <li>机械设备部件</li>
                    <li>定制化解决方案</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 产品详细展示区域 */}
          <div className="mt-32">
            {/* 连接线端子系列 */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">连接线端子系列</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 连接线端子图片1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/terminal1.jpg"
                      alt="手机连接器端子"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">手机连接器端子</h4>
                    <p className="mt-2 text-gray-600">高精度手机连接器端子，确保稳定连接和信号传输</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>精度：±0.01mm</li>
                      <li>材质：磷铜/黄铜</li>
                      <li>表面处理：镀金/镀锡</li>
                    </ul>
                  </div>
                </div>

                {/* 连接线端子图片2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/terminal2.jpg"
                      alt="储能设备端子"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">储能设备端子</h4>
                    <p className="mt-2 text-gray-600">大电流储能设备专用端子，确保安全可靠的电力传输</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>电流等级：100A-500A</li>
                      <li>耐压等级：1000V</li>
                      <li>接触电阻：≤1mΩ</li>
                    </ul>
                  </div>
                </div>

                {/* 连接线端子图片3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/terminal3.jpg"
                      alt="汽车电子端子"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">汽车电子端子</h4>
                    <p className="mt-2 text-gray-600">汽车电子连接器专用端子，高可靠性设计</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>温度范围：-40℃~125℃</li>
                      <li>防护等级：IP67</li>
                      <li>插拔寿命：{'>'}10000次</li>
                    </ul>
                  </div>
                </div>

                {/* 连接线端子图片4 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/terminal4.jpg"
                      alt="智能家居端子"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">智能家居端子</h4>
                    <p className="mt-2 text-gray-600">智能家居设备专用连接端子，稳定可靠</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>额定电流：3A-10A</li>
                      <li>接触电阻：≤10mΩ</li>
                      <li>绝缘电阻：≥1000MΩ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 连接弹片系列 */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">连接弹片系列</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 连接弹片图片1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/spring1.jpg"
                      alt="高频连接弹片"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">高频连接弹片</h4>
                    <p className="mt-2 text-gray-600">适用于高频信号传输的精密弹片</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>工作频率：DC-6GHz</li>
                      <li>接触力：20-100gf</li>
                      <li>寿命：10万次以上</li>
                    </ul>
                  </div>
                </div>

                {/* 连接弹片图片2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/spring2.jpg"
                      alt="电池连接弹片"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">电池连接弹片</h4>
                    <p className="mt-2 text-gray-600">电池设备专用连接弹片，确保稳定供电</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>电流承载：最大30A</li>
                      <li>弹片高度：0.8-3mm</li>
                      <li>压缩行程：0.3-1.5mm</li>
                    </ul>
                  </div>
                </div>

                {/* 连接弹片图片3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/spring3.jpg"
                      alt="测试探针弹片"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">测试探针弹片</h4>
                    <p className="mt-2 text-gray-600">精密测试设备专用探针弹片</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>定位精度：±0.02mm</li>
                      <li>接触电阻：≤50mΩ</li>
                      <li>使用寿命：{'>'}50万次</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 车铣加工件系列 */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">车铣加工件系列</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* 车铣加工件图片1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/machining1.jpg"
                      alt="精密轴类零件"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">精密轴类零件</h4>
                    <p className="mt-2 text-gray-600">高精度车铣复合加工轴类零件</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>加工精度：±0.005mm</li>
                      <li>表面粗糙度：Ra0.4</li>
                      <li>材质：不锈钢/铝合金</li>
                    </ul>
                  </div>
                </div>

                {/* 车铣加工件图片2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/products/machining2.jpg"
                      alt="医疗器械零件"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">医疗器械零件</h4>
                    <p className="mt-2 text-gray-600">医疗设备专用精密加工零件</p>
                    <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                      <li>公差要求：±0.003mm</li>
                      <li>表面处理：阳极氧化</li>
                      <li>材质：医用不锈钢/钛合金</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 定制服务说明 */}
          <div className="mt-20 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">定制服务</h3>
            <p className="text-gray-600">
              我们提供专业的产品定制服务，可根据客户需求进行个性化设计和生产。从产品设计、模具开发到批量生产，我们都将严格把控每个环节的质量。
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">设计支持</h4>
                <p className="mt-2 text-sm text-gray-600">提供产品设计建议和优化方案</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">样品打样</h4>
                <p className="mt-2 text-sm text-gray-600">快速样品制作和测试验证</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">质量保证</h4>
                <p className="mt-2 text-sm text-gray-600">全程质量监控和完善的售后服务</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 