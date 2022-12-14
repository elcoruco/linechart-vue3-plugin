<script setup>
/**
 * DEPENDENCIES
 * 
 */
import { ref, computed } from "vue";
import { scaleBand, scaleLinear } from "d3-scale";
import { format } from "d3-format";
import { line } from "d3-shape";

/**
 * PROPERTIES
 * 
 */
const props = defineProps({ 
  width      : Number, 
  height     : Number, 
  background : String,
  data       : Array,
  margin     : Object,
  color      : String,
  lineWidth  : Number,
  xAxis      : Object,
  yAxis      : Object,
});

/**
 * CONFIG
 * 
 */

// DEFAULT VALUES
// ----------------------------------------------------------------
const defaultMargin       = ref({top : 10, right : 10, bottom : 50, left : 50});
const defaultHeight       = ref(400);
const defaultWidth        = ref(400);
const xLabel              = ref();
const yLabel              = ref();
const minWidth            = ref();
const defaultLineWidth    = ref(1);
const defaultColor        = ref('black');
const defaultBackground   = ref("white");
const defaultPointPadding = ref(.2);
const ticks               = ref();
const y0                  = ref(0);
const defaultXAxis      =ref({ show : true, textClass : '', showGrid : false, gridClass : ''})
const defaultYAxis      =ref({ show : true, textClass : '', showGrid : true, gridClass : ''})

/**
 * COMPUTED
 * 
 */
const width        = computed( () => props.width || defaultWidth.value)
const height       = computed( () => props.height || defaultHeight.value)
const background   = computed( () => props.background || defaultBackground.value)
const margin       = computed( () => props.margin || defaultMargin.value)
const color        = computed( () => props.color || defaultColor.value)
const lineWidth    = computed( () => props.lineWidth  || defaultLineWidth .value)
const pointPadding = computed( () => props.pointPadding  || defaultPointPadding .value)
const xAxis      = computed( () => props.xAxis ? Object.assign(defaultXAxis.value, props.xAxis) : defaultXAxis.value )
const yAxis      = computed( () => props.yAxis ? Object.assign(defaultYAxis.value, props.yAxis) : defaultYAxis.value )

// XSCALE
// ----------------------------------------------------------------
const xScale = computed( () => {
  return scaleBand()
    .domain(props.data.flat().map(d => d.key))
    .range([margin.value.left, width.value - margin.value.right])
    .padding(pointPadding.value)
})

// YSCALE
// ----------------------------------------------------------------
const yScale = computed(() => {
  let curr = props.data.flat().map(d => d.value);
  let domain = [y0.value, Math.max(...curr)];
  let range = [height.value - margin.value.bottom, margin.value.top];

  return scaleLinear()
    .domain(domain)
        .rangeRound(range);
});

// LINE FUNCTION
// ----------------------------------------------------------------
const lineFn = computed( () => {
  const fn = line()
    .x(d => xScale.value(d.key) + xScale.value.bandwidth()/2)
    .y(d => {
      return  yScale.value(d.value)
    })
    
  return fn;
});

/**
 * HELPERS
 * 
 */
const f = format(",");

</script>
<template>
  <div class="gf_linechart_container">
    <h1></h1>
    <svg
      ref="svg"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ background: background }"
      version="1.2"
      baseProfile="tiny"
      width="100%"
      height="100%"
      :viewBox="`0 0 ${width} ${height}`"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="gf_linechart_svg">

      <!-- yScaleAxis -->
      <g :transform="`translate(${margin.left},0)`">
        <!-- ticks -->
        <g v-for="(tick, i) of yScale.ticks()"
          :transform="`translate(0, ${yScale(tick)})`"
          :key="`y-tick-${i}`">
          <line
            v-if="yAxis.showGrid"
            :x1="0"
            y1="0"
            :x2="width - margin.left - margin.right"
            y2="0"
            stroke="grey"
            :fill-opacity=".5" />
          <text
            y="0"
            x="-9"
            text-anchor="end"
            :class="yAxis.textClass"
            alignment-baseline="middle">
            {{ f(tick) }}
          </text>
        </g>

        <!-- Axis -->
        <!-- <line
          :x1="0"
          :y1="margin.top"
          :x2="0"
          :y2="height - margin.bottom"
          stroke="black" /> -->
      </g>

   
      <path v-for="(d, i) of data" :key="`line-${i}`" 
        fill="none" 
        :stroke="d.color || color" 
        :stroke-width="lineWidth" 
        stroke-linejoin="round" 
        stroke-linecap="round"
        :data-color="d.color" 
        :d="lineFn(d)" />
      <!-- xScaleAxis -->
      <g :transform="`translate(0, ${height - margin.bottom})`">
        <!-- ticks -->
        <g v-for="(tick, i) of xScale.domain()"
          :transform="`translate(${xScale(tick) + xScale.bandwidth() / 2}, 0)`"
          :key="`x-tick-${i}`">
          <line v-if="xAxis.showGrid" x1="0" y1="0" x2="0" :y2="3" stroke="black" />
          <text
            x="0"
            y="5"
            text-anchor="middle"
            :class="xAxis.textClass"
            alignment-baseline="hanging">
            {{ tick }}
          </text>
        </g>

        <!-- Axis -->
        <line
          :x1="margin.left"
          y1="0"
          :x2="width - margin.right"
          y2="0"
          stroke="black"
          stroke-width="2" />
      </g>
    </svg>
  </div>
</template>