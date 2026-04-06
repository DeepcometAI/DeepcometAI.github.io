<template>
  <section id="ecosystem" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900">Future Products &amp; Services</h2>
        <p class="mt-4 text-slate-600 max-w-3xl mx-auto">
          Phase 5 outlines how Deepcomet AI will monetize and dominate the market. This section covers the planned enterprise services, consumer hardware, and decentralized infrastructure built upon the foundational stack.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
          <div class="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-6">🏢</div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Enterprise Services</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">▪</span>
              <div>
                <strong class="text-slate-800 text-sm block">Deepcomet "Private Brain"</strong>
                <span class="text-slate-600 text-sm">Localized SkyOS &amp; DeepComet for total corporate data sovereignty.</span>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">▪</span>
              <div>
                <strong class="text-slate-800 text-sm block">Aurelia Migration Forge</strong>
                <span class="text-slate-600 text-sm">AI service to automatically port legacy C++/Java to Aurelia.</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
          <div class="h-12 w-12 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-6">📱</div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Consumer Products</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-violet-500 mr-2">▪</span>
              <div>
                <strong class="text-slate-800 text-sm block">The SkyTablet</strong>
                <span class="text-slate-600 text-sm">A "Pane of Glass" with generative UI adapting to the user's thought process.</span>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-violet-500 mr-2">▪</span>
              <div>
                <strong class="text-slate-800 text-sm block">Personal Digital Twin (PDT)</strong>
                <span class="text-slate-600 text-sm">Learns voice and style to handle administrative tasks autonomously.</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
          <div class="h-12 w-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-6">☁️</div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Infrastructure</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-cyan-500 mr-2">▪</span>
              <div>
                <strong class="text-slate-800 text-sm block">SkyCloud Network</strong>
                <span class="text-slate-600 text-sm">Decentralized network sharing idle NPU power across thousands of SkyOS machines to train future models.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h3 class="text-xl font-bold text-center mb-6 text-slate-800">Theoretical Performance Paradigm</h3>
        <p class="text-center text-sm text-slate-600 mb-6 max-w-2xl mx-auto">By eliminating OS context switches and Python wrappers, the Vertical Stack aims to drastically reduce overhead.</p>
        <div class="chart-container">
          <canvas ref="performanceChartEl"></canvas>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const performanceChartEl = ref(null)

onMounted(async () => {
  const { Chart, registerables } = await import('chart.js')
  Chart.register(...registerables)

  new Chart(performanceChartEl.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['OS Overhead', 'Language Runtime', 'Memory Mgmt', 'AI Framework Ops'],
      datasets: [
        {
          label: 'Legacy Stack (Linux/Python/PyTorch)',
          data: [100, 80, 60, 90],
          backgroundColor: '#94a3b8',
          borderRadius: 4
        },
        {
          label: 'Deepcomet Stack (Zenith/Aurelia/Native)',
          data: [10, 5, 15, 10],
          backgroundColor: '#3b82f6',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#475569', font: { family: 'Inter' } }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Relative Latency/Overhead Unit', color: '#64748b' },
          grid: { borderDash: [4, 4] }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  })
})
</script>