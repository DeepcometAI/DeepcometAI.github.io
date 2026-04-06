<template>
  <section id="stack" class="py-16 bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900">The Vertical Stack Architecture</h2>
        <p class="mt-4 text-slate-600 max-w-3xl mx-auto">
          This section outlines the core philosophy of Deepcomet AI. Unlike competitors running AI on top of 30-year-old operating systems, we are engineering a fully integrated vertical stack. Click on the layers below to explore the four foundational phases of our strategic roadmap.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <div class="w-full lg:w-1/2 flex flex-col-reverse gap-4 relative">

          <div
            v-for="layer in layers"
            :key="layer.phase"
            class="stack-layer border-2 p-6 rounded-xl text-center"
            :class="[layer.bg, activePhase === layer.phase ? 'active border-blue-500' : 'border-slate-200']"
            :data-phase="layer.phase"
            @click="selectPhase(layer.phase)"
          >
            <div class="text-sm font-bold uppercase tracking-widest mb-1" :class="layer.labelColor">{{ layer.label }}</div>
            <h3 class="text-2xl font-bold" :class="layer.titleColor">{{ layer.title }}</h3>
          </div>

          <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -z-10 transform -translate-x-1/2"></div>
        </div>

        <div class="w-full lg:w-1/2 min-h-[350px]">
          <div id="stack-details" class="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full shadow-sm">
            <transition name="fade" mode="out-in">
              <div v-if="activeData" :key="activePhase" class="h-full flex flex-col fade-in">
                <span class="uppercase tracking-widest text-xs font-bold text-blue-500 mb-2">{{ activeData.subtitle }}</span>
                <h4 class="text-2xl font-bold mb-4 pb-4 border-b border-slate-200" :class="activeData.color">{{ activeData.title }}</h4>
                <p class="text-slate-600 leading-relaxed flex-grow text-sm md:text-base" v-html="activeData.content"></p>
              </div>
              <div v-else class="flex items-center justify-center h-full text-slate-400 text-center">
                Select a layer from the stack to view strategic details.
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stackData = {
  "1": {
    title: "Phase 1: Aurelia Programming Language",
    subtitle: "The Foundation",
    content: "Create a systems programming language where AI tensors are first-class citizens. Traditional languages treat AI as an add-on. Aurelia integrates neural computation into the compiler itself. Features include Tensor Primitives, Neuro-Linear Types with a Predictive Allocator, and Native Async designed for thousands of NPU/GPU cores. <br><br><strong>Strategic Goal:</strong> Establish Aurelia as the 'Speed of Light' language for AI, making it 10x faster for model training and inference.",
    color: "text-slate-800",
    bg: "bg-slate-100"
  },
  "2": {
    title: "Phase 2: Zenith Kernel",
    subtitle: "The Core",
    content: "A microkernel written entirely in Aurelia that replaces traditional CPU schedulers with an AI model. Unlike Linux, which reacts to hardware interrupts, Zenith anticipates them. <br><br><strong>Features:</strong> Predictive Scheduling (allocates NPU cycles before requested), Zero-Copy Memory across hardware, and Security via Verifiability. <br><br><strong>Strategic Goal:</strong> Create an OS core inherently designed for AI workloads.",
    color: "text-slate-800",
    bg: "bg-slate-200"
  },
  "3": {
    title: "Phase 3: SkyOS",
    subtitle: "The Operating System",
    content: "An operating system with no static applications. The UI is generated in real-time by a local AI model based on user intent. <br><br><strong>Concepts:</strong> The Intent Engine replaces the traditional desktop. When a user asks to 'edit a video', SkyOS compiles a bespoke video editor interface on the fly using native Aurelia components. Radical simplicity with no file system exposure.",
    color: "text-slate-800",
    bg: "bg-slate-300"
  },
  "4": {
    title: "Phase 4: DeepComet Models",
    subtitle: "The Mind",
    content: "A family of foundation models trained to run natively on the Zenith Kernel without intermediate frameworks like PyTorch or ONNX. <br><br><strong>Variants:</strong><br>- DeepComet-Core: General reasoning engine.<br>- DeepComet-Coder: Specialized in Aurelia, the auto-complete for the ecosystem.<br>- DeepComet-Mobile: Optimized for zero-latency execution on edge devices.",
    color: "text-blue-900",
    bg: "bg-blue-50"
  }
}

const layers = [
  { phase: "1", label: "Phase 1: Foundation", title: "Aurelia Language",     bg: "bg-slate-50",                                          labelColor: "text-slate-500", titleColor: "text-slate-800" },
  { phase: "2", label: "Phase 2: Core",        title: "Zenith Kernel",        bg: "bg-slate-100",                                         labelColor: "text-slate-500", titleColor: "text-slate-800" },
  { phase: "3", label: "Phase 3: Interface",   title: "SkyOS",                bg: "bg-slate-200",                                         labelColor: "text-slate-500", titleColor: "text-slate-800" },
  { phase: "4", label: "Phase 4: Mind",        title: "DeepComet AI Models",  bg: "bg-gradient-to-r from-blue-900 to-violet-900",         labelColor: "text-blue-300",  titleColor: "text-white"     }
]

const activePhase = ref("1")
const activeData = computed(() => stackData[activePhase.value] || null)

function selectPhase(phase) {
  activePhase.value = phase
}
</script>