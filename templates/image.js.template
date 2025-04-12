module.exports = {
    params: {
        designator: 'LOGO',
        side: 'F',
        reversible: false,
        scale: 1.0,
        name: "logo"
    },

    body: p => {
        const scaled_point = (x, y, scale, mirrored) => {
            let scaled_x = x * scale * (mirrored ? -1.0 : 1.0)
            let scaled_y = y * scale
            return `(xy ${scaled_x.toFixed(6)} ${scaled_y.toFixed(6)})`
        }

        const fp_poly = (side, scale, mirrored) => {
            const s = scale
            const m = mirrored
            return `
            (fp_poly
                (pts
                    ${/* add all point in the form of, e.g., */}
                    ${scaled_point(0.642596, -5.377402, s, m)}
                )
                (stroke (width 0.01) (type solid))
                (fill solid)
                (layer "${side}.SilkS")
            )
             `
        }

        let result = `
        (footprint "${p.name}"
            (layer "${p.side}.Cu")
            ${p.at}
            (property "Reference" "${p.ref}"
                (at 0 0 ${p.r})
                (layer "${p.side}.Fab")
                ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (attr exclude_from_pos_files exclude_from_bom)
        `

        if (p.reversible) {
            result += fp_poly('F', p.scale, false)
            result += fp_poly('B', p.scale, true)
        } else {
            result += fp_poly(p.side, p.scale, p.side == 'B')
        }

        return `${result})
        `
    }
}