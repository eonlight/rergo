module.exports = {
    params: {
        designator: 'RST',
        side: 'F',
        reversible: true,
        from: { type: 'net', value: 'GND' },
        to: { type: 'net', value: 'RST' },
    },


    body: p => {
        const standard = `
        (footprint "rdc:reset_switch_b3u_1000p"
            (layer "${p.side}.Cu")
            ${p.at}
            (property "Reference" "${p.ref}"
                (at 0 0 ${90 + p.r})
                (layer "${p.side}.SilkS")
                ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
        `

        function traces(def_side) {
            return `
            (attr smd)
            (fp_circle (center 0 0) (end 0.75 0) (layer "${def_side}.Fab") (width 0.1))
            (fp_line (start -1.5 1.25) (end -1.5 -1.25) (layer "${def_side}.Fab") (width 0.1))
            (fp_line (start 1.5 1.25) (end -1.5 1.25) (layer "${def_side}.Fab") (width 0.1))
            (fp_line (start 1.5 -1.25) (end 1.5 1.25) (layer "${def_side}.Fab") (width 0.1))
            (fp_line (start -1.5 -1.25) (end 1.5 -1.25) (layer "${def_side}.Fab") (width 0.1))

            (fp_line (start -2.4 -1.65) (end -2.4 1.65) (layer "${def_side}.CrtYd") (width 0.05))
            (fp_line (start 2.4 -1.65) (end -2.4 -1.65) (layer "${def_side}.CrtYd") (width 0.05))
            (fp_line (start 2.4 1.65) (end 2.4 -1.65) (layer "${def_side}.CrtYd") (width 0.05))
            (fp_line (start -2.4 1.65) (end 2.4 1.65) (layer "${def_side}.CrtYd") (width 0.05))

            (fp_text user "RST" (at 0 2.6 ${p.r}) (layer "${def_side}.SilkS") (effects (font (size 1 1) (thickness 0.1)) ${def_side == 'B' ? '(justify mirror)' : ''}))
            `
        }

        function pins(def_neg, def_pos, def_side) {
            return `
            (pad "1" smd rect (at ${def_neg}1.7 0 ${p.r}) (size 0.9 1.7) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") ${p.to.str})
            (pad "2" smd rect (at ${def_pos}1.7 0 ${p.r}) (size 0.9 1.7) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") ${p.from.str})
            `
        }
        if(p.reversible) {
            return `
            ${standard}
            ${traces('B')}
            ${traces('F')}
            ${pins('-', '', 'B')}
            ${pins('', '-', 'F')})
            `
        } else {
            return `
            ${standard}
            ${traces('F')}
            ${pins('-', '', 'F')})
            `
        }
    }
}