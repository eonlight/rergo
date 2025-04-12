function cutout_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[92.0496725,-111.5154154],[130.2514244,-101.9906489]]).appendArc([132.7349636,-103.8963356],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.9373553,-115.4913454]).appendPoint([133.0769745,-123.4901269]).appendArc([135.1115747,-125.4549175],{"radius":2,"clockwise":false,"large":false}).appendPoint([155.1085286,-125.1058694]).appendPoint([155.1084562,-125.1017203]).appendPoint([190.0660865,-125.711908]).appendArc([190.6159251,-125.7989939],{"radius":2,"clockwise":true,"large":false}).appendPoint([213.2992903,-132.7339947]).appendArc([215.7966432,-131.4061286],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.036033,-117.5397096]).appendArc([218.7081669,-115.0423567],{"radius":2,"clockwise":false,"large":false}).appendPoint([217.73551,-114.7449857]).appendArc([216.3229943,-112.7277042],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.6112173,-49.9846726]).appendArc([217.7186302,-47.8827415],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.9248488,-45.4303833]).appendArc([169.0307392,-43.5029232],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.8745359,-39.0298481]).appendArc([166.8059552,-37.1008654],{"radius":2,"clockwise":false,"large":false}).appendPoint([147.4920283,-37.7753226]).appendArc([145.4271012,-35.9160539],{"radius":2,"clockwise":true,"large":false}).appendPoint([145.2398231,-33.2378531]).appendArc([143.105182,-31.382238],{"radius":2,"clockwise":false,"large":false}).appendPoint([124.6502472,-32.6727328]).appendArc([122.7946321,-34.8073739],{"radius":2,"clockwise":false,"large":false}).appendPoint([122.9538376,-37.0841189]).appendArc([121.1677665,-39.2126757],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.3028934,-41.1954538]).appendArc([100.5229066,-43.3935546],{"radius":2,"clockwise":false,"large":false}).appendPoint([100.8212953,-46.2325333]).appendArc([99.3160953,-48.3821817],{"radius":2,"clockwise":true,"large":false}).appendPoint([77.6553197,-53.7828197]).appendArc([76.1985721,-56.207255],{"radius":2,"clockwise":false,"large":false}).appendPoint([89.6252372,-110.0586677]).appendArc([92.0496725,-111.5154153],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function mounting_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[194.1719871,-105.4793395],"radius":1.5})
.union(
    CAG.circle({"center":[161.070571,-102.0906175],"radius":1.5})
).union(
    CAG.circle({"center":[172.1844263,-62.1784361],"radius":1.5})
).union(
    CAG.circle({"center":[118.6773637,-96.5370224],"radius":1.5})
).union(
    CAG.circle({"center":[102.6937427,-59.1344431],"radius":1.5})
).extrude({ offset: [0, 0, 1.5] });
}


function feet_extrude_0_5_outline_fn(){
    return CAG.circle({"center":[211.8191416,-127.314432],"radius":3.15})
.union(
    CAG.circle({"center":[138.5237796,-120.3945956],"radius":3.15})
).union(
    CAG.circle({"center":[214.9734605,-52.4953919],"radius":3.15})
).union(
    CAG.circle({"center":[162.9741646,-41.9875698],"radius":3.15})
).union(
    CAG.circle({"center":[93.4472437,-106.7868538],"radius":3.15})
).union(
    CAG.circle({"center":[81.109227,-57.3017718],"radius":3.15})
).extrude({ offset: [0, 0, 0.5] });
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

        