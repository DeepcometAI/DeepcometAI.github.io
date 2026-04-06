<template>
  <section id="aurelia" class="py-20 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-blue-400 font-semibold tracking-wider uppercase text-sm">Phase 1 Deep Dive</span>
        <h2 class="text-4xl font-bold mt-2 mb-4">Aurelia Programming Language</h2>
        <p class="text-slate-300 max-w-3xl">
          This section details the flagship open-source project driving the Deepcomet ecosystem. Aurelia is the "Speed of Light" AI-Native Systems Language. It explores the technical breakthroughs designed to eliminate legacy abstraction layers and integrate neural computation as a first-class compiler primitive.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div class="text-3xl mb-4">⚡</div>
          <h4 class="text-xl font-bold mb-2">Neuro-Linear Types</h4>
          <p class="text-slate-400 text-sm">Ownership system combining affine types with AI-guided prefetch hints. A "Predictive Allocator" prefetches data into the L1 cache based on AI-predicted execution paths.</p>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div class="text-3xl mb-4">🧠</div>
          <h4 class="text-xl font-bold mb-2">Tensor Primitives</h4>
          <p class="text-slate-400 text-sm">Unlike standard arrays, tensor types have built-in metadata for shape, stride, and automatic differentiation directly within the language compiler.</p>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div class="text-3xl mb-4">⚙️</div>
          <h4 class="text-xl font-bold mb-2">Dual-Language Engine</h4>
          <p class="text-slate-400 text-sm">C++23 powers the high-performance compiler core and MLIR/LLVM integration. Go 1.22+ powers the developer toolchain (CLI, LSP, package manager).</p>
        </div>
      </div>

      <div class="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700">
        <h3 class="text-2xl font-bold mb-6 text-center">Aurelia Development Roadmap</h3>

        <div class="chart-container">
          <canvas ref="roadmapChartEl"></canvas>
        </div>

        <div class="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div class="p-3 bg-slate-900 rounded-lg border border-slate-700">
            <div class="text-blue-400 font-bold">Q4 2026</div>
            <div class="text-xs text-slate-300 mt-1">Alpha Compiler</div>
          </div>
          <div class="p-3 bg-slate-900 rounded-lg border border-slate-700">
            <div class="text-blue-400 font-bold">Q1 2027</div>
            <div class="text-xs text-slate-300 mt-1">MLIR Integration</div>
          </div>
          <div class="p-3 bg-slate-900 rounded-lg border border-slate-700">
            <div class="text-blue-400 font-bold">Q2 2027</div>
            <div class="text-xs text-slate-300 mt-1">GPU Codegen</div>
          </div>
          <div class="p-3 bg-slate-900 rounded-lg border border-slate-700">
            <div class="text-blue-400 font-bold">Q3 2027</div>
            <div class="text-xs text-slate-300 mt-1">Beta Release</div>
          </div>
          <div class="p-3 bg-slate-900 rounded-lg border border-slate-700">
            <div class="text-blue-400 font-bold">Q4 2027</div>
            <div class="text-xs text-slate-300 mt-1">NPU Support</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const roadmapChartEl = ref(null)

onMounted(async () => {
  const { Chart, registerables } = await import('chart.js')
  Chart.register(...registerables)

  new Chart(roadmapChartEl.value.getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Q4 2026', 'Q1 2027', 'Q2 2027', 'Q3 2027', 'Q4 2027'],
      datasets: [{
        label: 'Compiler Maturity & Integration Level',
        data: [20, 40, 60, 85, 100],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#3b82f6',
        pointBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              const phases = ['Alpha (Lexer/Parser)', 'MLIR/Autodiff', 'GPU Codegen', 'Beta (LSP/Stdlib)', 'Production (NPU)']
              return phases[context.dataIndex]
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { color: '#94a3b8' },
          grid: { color: '#334155' }
        },
        x: {
          ticks: { color: '#94a3b8' },
          grid: { display: false }
        }
      }
    }
  })
})
</script>