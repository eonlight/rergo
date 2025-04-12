function cutout_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[94.25,-92.25],[105.75,-92.25]]).appendArc([107.75,-94.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.75,-105.75]).appendArc([105.75,-107.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([94.25,-107.75]).appendArc([92.25,-105.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([92.25,-94.25]).appendArc([94.25,-92.25],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function mounting_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[102.5,-97.5],"radius":1.5})
.extrude({ offset: [0, 0, 1.5] });
}


function feet_extrude_0_5_outline_fn(){
    return CAG.circle({"center":[97.5,-102.5],"radius":3.15})
.extrude({ offset: [0, 0, 0.5] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = cutout_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            

                // creating part 1 of case bottom
                let bottom__part_1 = mounting_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom__part_1_bounds = bottom__part_1.getBounds();
                let bottom__part_1_x = bottom__part_1_bounds[0].x + (bottom__part_1_bounds[1].x - bottom__part_1_bounds[0].x) / 2
                let bottom__part_1_y = bottom__part_1_bounds[0].y + (bottom__part_1_bounds[1].y - bottom__part_1_bounds[0].y) / 2
                bottom__part_1 = translate([-bottom__part_1_x, -bottom__part_1_y, 0], bottom__part_1);
                bottom__part_1 = rotate([0,0,0], bottom__part_1);
                bottom__part_1 = translate([bottom__part_1_x, bottom__part_1_y, 0], bottom__part_1);

                bottom__part_1 = translate([0,0,0], bottom__part_1);
                result = result.subtract(bottom__part_1);
                
            

                // creating part 2 of case bottom
                let bottom__part_2 = feet_extrude_0_5_outline_fn();

                // make sure that rotations are relative
                let bottom__part_2_bounds = bottom__part_2.getBounds();
                let bottom__part_2_x = bottom__part_2_bounds[0].x + (bottom__part_2_bounds[1].x - bottom__part_2_bounds[0].x) / 2
                let bottom__part_2_y = bottom__part_2_bounds[0].y + (bottom__part_2_bounds[1].y - bottom__part_2_bounds[0].y) / 2
                bottom__part_2 = translate([-bottom__part_2_x, -bottom__part_2_y, 0], bottom__part_2);
                bottom__part_2 = rotate([0,0,0], bottom__part_2);
                bottom__part_2 = translate([bottom__part_2_x, bottom__part_2_y, 0], bottom__part_2);

                bottom__part_2 = translate([0,0,0], bottom__part_2);
                result = result.subtract(bottom__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        