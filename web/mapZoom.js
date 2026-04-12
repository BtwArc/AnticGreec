function InitMapZoom () {
    const svg = document.querySelector('.container svg')

    let viewBox = getInitialViewBox(svg)

    const ZOOM_FACTOR = 0.2
    const MIN_SCALE = 0.1
    const MAX_SCALE = 0.8
    const INITIAL_ZOOM = 0.4

    const originalX = viewBox.x
    const originalY = viewBox.y
    const originalW = viewBox.w
    const originalH = viewBox.h

    // INITIAL ZOOM (centered)
    const centerX = viewBox.x + viewBox.w / 2
    const centerY = viewBox.y + viewBox.h / 2

    viewBox.w *= INITIAL_ZOOM
    viewBox.h *= INITIAL_ZOOM

    viewBox.x = centerX - viewBox.w / 2
    viewBox.y = centerY - viewBox.h / 2

    applyViewBox()

    svg.addEventListener('wheel', (e) => {
        e.preventDefault()

        const direction = e.deltaY < 0 ? -1 : 1
        const zoomAmount = 1 + direction * ZOOM_FACTOR

        const newW = viewBox.w * zoomAmount
        const newH = viewBox.h * zoomAmount

        if (newW / originalW > MAX_SCALE || newW / originalW < MIN_SCALE) return

        const svgPoint = clientToSvgPoint(svg, e.clientX, e.clientY)

        viewBox.x = svgPoint.x - (svgPoint.x - viewBox.x) * zoomAmount
        viewBox.y = svgPoint.y - (svgPoint.y - viewBox.y) * zoomAmount
        viewBox.w = newW
        viewBox.h = newH

        clampViewBox()
        applyViewBox()
    })

    svg.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return
        isPanning = true
        startPoint = clientToSvgPoint(svg, e.clientX, e.clientY)
        startViewBox = { ...viewBox }
        svg.style.cursor = 'grabbing'
        e.preventDefault()
    })

    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return

        const current = clientToSvgPoint(svg, e.clientX, e.clientY)

        viewBox.x = startViewBox.x - (current.x - startPoint.x)
        viewBox.y = startViewBox.y - (current.y - startPoint.y)

        clampViewBox()
        applyViewBox()
    })

    window.addEventListener('mouseup', () => {
        if (!isPanning) return
        isPanning = false
        svg.style.cursor = 'grab'
    })

    function getInitialViewBox(svgEl) {
        const vb = svgEl.getAttribute('viewBox')

        if (vb) {
            const [x, y, w, h] = vb.split(/[\s,]+/).map(Number)
            return { x, y, w, h }
        }

        const rect = svgEl.getBoundingClientRect()
        return { x: 0, y: 0, w: rect.width || 800, h: rect.height || 600 }
    }

    function clientToSvgPoint(svgEl, clientX, clientY) {
        const rect = svgEl.getBoundingClientRect()

        const scaleX = viewBox.w / rect.width
        const scaleY = viewBox.h / rect.height

        return {
            x: viewBox.x + (clientX - rect.left) * scaleX,
            y: viewBox.y + (clientY - rect.top) * scaleY
        }
    }

    function clampViewBox() {
        viewBox.x = Math.max(originalX, viewBox.x)
        viewBox.x = Math.min(originalX + originalW - viewBox.w, viewBox.x)

        viewBox.y = Math.max(originalY, viewBox.y)
        viewBox.y = Math.min(originalY + originalH - viewBox.h, viewBox.y)
    }

    function applyViewBox() {
        svg.setAttribute(
            'viewBox',
            `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    InitMapZoom()
})