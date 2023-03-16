<script lang="ts">

	let heg_coord = "52,95988° N, 10,56097° O"

	let radius: number = 18;

	let width = radius * 2 + 4;
	let height = radius * 2 + 4;

	let cx = width / 2;
	let cy = height / 2;
	let outerRadius = radius;

	let innerRadius = 3;
	let needleInnerRadius = 5;
	let timer = null;
	let northRotation = 300;
	let rotation = 300;

	function deg2rad(deg: number) {
		return (deg * Math.PI) / 180;
	}
	
	function arc(
		rx: number,
		ry: number,
		xAxisRotation: number,
		largeArcFlag: number,
		sweepFlag: number,
		x: number,
		y: number
	) {
		return (
			'A' +
			rx +
			',' +
			ry +
			',' +
			xAxisRotation +
			',' +
			largeArcFlag +
			',' +
			sweepFlag +
			',' +
			x +
			',' +
			y
		);
	}
	function move(x: number, y: number) {
		return 'M' + x + ',' + y;
	}
	function line(x: number, y: number) {
		return 'L' + x + ',' + y;
	}
	function ease(pos: number) {
		// pos [0..1]
		if (pos < 0.8) {
			var t = pos / 0.8;
			return t * t * t;
		}
		return 1 + Math.sin(((pos - 0.8) / 0.2) * Math.PI) * 0.1;
	}

	function needlePath() {
		var angle = deg2rad(45);

		// arc start
		var sx = cx + Math.sin(angle) * needleInnerRadius;
		var sy = cy - Math.cos(angle) * needleInnerRadius;

		// arc end
		var ex = sx;
		var ey = cy + Math.cos(angle) * needleInnerRadius;

		// tip of needle
		var tx = cx + radius - 2;
		var ty = cy;
		return (
			move(sx, sy) +
			' ' +
			arc(needleInnerRadius, needleInnerRadius, 0, 0, 1, ex, ey) +
			' ' +
			line(tx, ty)
		);
	}

	function southNeedleTransform() {
		return 'rotate(180,' + cx + ',' + cy + ')';
	}
</script>

<section class="grid place-items-center">
	<svg {width} {height}>
		<circle {cx} {cy} r={outerRadius} class="logo-outer-circle" />
		<circle {cx} {cy} r={innerRadius} class="logo-inner-circle" />
		<g transform="transform">
			<path d={needlePath()} class="logo-needle north" />
			<path d={needlePath()} transform={southNeedleTransform()} class="logo-needle" />
		</g>
	</svg>
</section>

<style>
	.logo-outer-circle {
		stroke: #777;
		stroke-width: 2px;
		fill: none;
	}
	.logo-inner-circle {
		fill: #777;
		stroke: none;
	}
	.logo-needle {
		fill: #777;
		stroke: none;
	}
	.north {
		fill: #f55;
	}
</style>
