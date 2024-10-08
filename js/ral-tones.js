/*
RAL-Tones-to-CSS © 2024 by Sven Minio is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*/
(function($) {
    $.fn.ral = function(arg, colorspace = "hex", dec = 0) {
        let ral = [['ral1000', '#CDBA88'], ['ral1001', '#D0B084'], ['ral1002', '#D2AA6D'], ['ral1003', '#F9A800'], ['ral1004', '#E2B007'], ['ral1005', '#CB8E00'], ['ral1006', '#E29000'], ['ral1007', '#E88C00'], ['ral1011', '#AF8A54'], ['ral1012', '#D9C022'], ['ral1013', '#E3D9C6'], ['ral1014', '#DDC49A'], ['ral1015', '#E6D2B5'], ['ral1016', '#EAF044'], ['ral1017', '#F4B752'], ['ral1018', '#F3E03B'], ['ral1019', '#A4957D'], ['ral1020', '#9A9464'], ['ral1021', '#F6B600'], ['ral1022', '#FFFF66'], ['ral1023', '#F7B500'], ['ral1024', '#B89C50'], ['ral1026', '#FFFF00'], ['ral1027', '#A38C15'], ['ral1028', '#FF9B00'], ['ral1032', '#E2A300'], ['ral1033', '#FAAB21'], ['ral1034', '#EDAB56'], ['ral1035', '#A29985'], ['ral1036', '#927549'], ['ral1037', '#EEA205'], ['ral1039', '#CEC19E'], ['ral1040', '#BBAC81'], ['ral2000', '#DA6E00'], ['ral2001', '#BA481B'], ['ral2002', '#C63927'], ['ral2003', '#FA842B'], ['ral2004', '#E75B12'], ['ral2005', '#FF4912'], ['ral2006', '#FFA500'], ['ral2007', '#FFA421'], ['ral2008', '#ED6B21'], ['ral2009', '#E15501'], ['ral2010', '#D4652F'], ['ral2011', '#E26E0E'], ['ral2012', '#DB6A50'], ['ral2013', '#954527'], ['ral2017', '#FA4402'], ['ral3000', '#A72920'], ['ral3001', '#9B2423'], ['ral3002', '#9B2321'], ['ral3003', '#861A22'], ['ral3004', '#6B1C23'], ['ral3005', '#59191F'], ['ral3007', '#3E2022'], ['ral3009', '#6D332C'], ['ral3011', '#7E292C'], ['ral3012', '#CB8D73'], ['ral3013', '#9C322E'], ['ral3014', '#D47479'], ['ral3015', '#D79FA6'], ['ral3016', '#AC4034'], ['ral3017', '#D3545F'], ['ral3018', '#D14152'], ['ral3019', '#FF2A1B'], ['ral3020', '#BB1E10'], ['ral3022', '#CC6855'], ['ral3024', '#FF2D21'], ['ral3026', '#FF0000'], ['ral3027', '#B42041'], ['ral3028', '#CC2C24'], ['ral3030', '#FF4500'], ['ral3031', '#A63437'], ['ral3032', '#711521'], ['ral3033', '#B24C43'], ['ral4000', '#60007F'], ['ral4001', '#8A5A83'], ['ral4002', '#933D50'], ['ral4003', '#C45F8C'], ['ral4004', '#691639'], ['ral4005', '#83639D'], ['ral4006', '#992572'], ['ral4007', '#4A203B'], ['ral4008', '#884D84'], ['ral4009', '#A38995'], ['ral4010', '#C63678'], ['ral4011', '#8773A1'], ['ral4012', '#6B6880'], ['ral5000', '#384E6F'], ['ral5001', '#0F4C64'], ['ral5002', '#00387B'], ['ral5003', '#2A3756'], ['ral5004', '#191E28'], ['ral5005', '#005387'], ['ral5007', '#41678D'], ['ral5008', '#313C48'], ['ral5009', '#2E5978'], ['ral5010', '#004F7C'], ['ral5011', '#1A2B3C'], ['ral5012', '#3481B8'], ['ral5013', '#193153'], ['ral5014', '#6C7C98'], ['ral5015', '#2874B2'], ['ral5016', '#0000FF'], ['ral5017', '#005A8C'], ['ral5018', '#21888F'], ['ral5019', '#1A5784'], ['ral5020', '#0B4151'], ['ral5021', '#07737A'], ['ral5022', '#222D5A'], ['ral5023', '#4D668E'], ['ral5024', '#6A93B0'], ['ral5025', '#296478'], ['ral5026', '#102C54'], ['ral6000', '#3C7460'], ['ral6001', '#366735'], ['ral6002', '#325928'], ['ral6003', '#50533C'], ['ral6004', '#024442'], ['ral6005', '#114232'], ['ral6006', '#3C392E'], ['ral6007', '#2C3222'], ['ral6008', '#37342A'], ['ral6009', '#27352A'], ['ral6010', '#4D6F39'], ['ral6011', '#6C7C59'], ['ral6012', '#303D3A'], ['ral6013', '#7D765A'], ['ral6014', '#474135'], ['ral6015', '#3D3D36'], ['ral6016', '#00694C'], ['ral6017', '#587F40'], ['ral6018', '#61993B'], ['ral6019', '#B9CEAC'], ['ral6020', '#37422F'], ['ral6021', '#8A9977'], ['ral6022', '#3A3327'], ['ral6023', '#32CD32'], ['ral6024', '#008351'], ['ral6025', '#5E6E3B'], ['ral6026', '#005F4E'], ['ral6027', '#7EBAB5'], ['ral6028', '#315442'], ['ral6029', '#006F3D'], ['ral6030', '#00FF00'], ['ral6031', '#485746'], ['ral6032', '#237F52'], ['ral6033', '#46877F'], ['ral6034', '#7AACAC'], ['ral6035', '#194D25'], ['ral6036', '#04574B'], ['ral6037', '#008B29'], ['ral6038', '#00B51A'], ['ral6039', '#B3C53F'], ['ral6040', '#827E58'], ['ral7000', '#7A888E'], ['ral7001', '#8F999F'], ['ral7002', '#817863'], ['ral7003', '#7A7669'], ['ral7004', '#9B9B9B'], ['ral7005', '#6B716F'], ['ral7006', '#756F61'], ['ral7008', '#745E3D'], ['ral7009', '#5D6058'], ['ral7010', '#585C56'], ['ral7011', '#555D61'], ['ral7012', '#575D5E'], ['ral7013', '#575044'], ['ral7015', '#51565C'], ['ral7016', '#383E42'], ['ral7017', '#696969'], ['ral7018', '#2E3236'], ['ral7019', '#2f363b'], ['ral7020', '#646464'], ['ral7021', '#2F3234'], ['ral7022', '#4B4D46'], ['ral7023', '#818479'], ['ral7024', '#474A50'], ['ral7025', '#808080'], ['ral7026', '#374244'], ['ral7027', '#7B765E'], ['ral7028', '#B2997A'], ['ral7030', '#939388'], ['ral7031', '#5B686D'], ['ral7032', '#B5B0A1'], ['ral7033', '#818979'], ['ral7034', '#91886F'], ['ral7035', '#CBD0CC'], ['ral7036', '#9A9697'], ['ral7037', '#7A7B7A'], ['ral7038', '#B4B8B0'], ['ral7039', '#6B685E'], ['ral7040', '#9DA3A6'], ['ral7042', '#8F9695'], ['ral7043', '#4E5451'], ['ral7044', '#BDBDB2'], ['ral7045', '#8D9194'], ['ral7046', '#82898E'], ['ral7047', '#CFD0CF'], ['ral7048', '#888175'], ['ral7050', '#82887A'], ['ral8000', '#89693E'], ['ral8001', '#99622D'], ['ral8002', '#794D3E'], ['ral8003', '#7E4B26'], ['ral8004', '#8F4E35'], ['ral8007', '#6F4A2F'], ['ral8008', '#6E4A23'], ['ral8010', '#9F8441'], ['ral8011', '#5A3A29'], ['ral8012', '#66332B'], ['ral8014', '#4A3526'], ['ral8015', '#633A34'], ['ral8016', '#492A1F'], ['ral8017', '#442F29'], ['ral8019', '#3F3A3A'], ['ral8020', '#CFAF7F'], ['ral8022', '#211F20'], ['ral8023', '#A65E2F'], ['ral8024', '#765038'], ['ral8025', '#755C49'], ['ral8026', '#A52A2A'], ['ral8027', '#504938'], ['ral8028', '#4E3B2B'], ['ral8029', '#773C27'], ['ral8031', '#B49D7B'], ['ral9001', '#E9E0D2'], ['ral9002', '#D7D5CB'], ['ral9003', '#F4F8F4'], ['ral9004', '#2E3032'], ['ral9005', '#0E0E10'], ['ral9006', '#A1A1A0'], ['ral9007', '#878683'], ['ral9010', '#F7F9EF'], ['ral9011', '#292C2F'], ['ral9012', '#FFFDE6'], ['ral9013', '#F1ECE1'], ['ral9014', '#FFD700'], ['ral9016', '#F7FBF5'], ['ral9017', '#2A2D2F'], ['ral9018', '#C7CAC3'], ['ral9019', '#F1F0EA'], ['ral9020', '#FDFDFD'], ['ral9021', '#01050E'], ['ral9022', '#9C9C9C'], ['ral9023', '#7E8182']];
        const hex2rgb = (hex) => {
            let bigint;
            hex = hex.replace(/^#/, '');
            if (hex.length !== 3 && hex.length !== 6) {
                throw new Error('Invalid HEX color.');
            }
            hex = hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex;
            bigint = parseInt(hex, 16), r = (bigint >> 16) & 255, g = (bigint >> 8) & 255, b = bigint & 255;
            return [r, g, b];
        }
        const normalize = (r, g, b) => {
            r = r / 255;
            g = g / 255;
            b = b / 255;
            return [r, g, b];
        }
        const toRound = (num, dec = 0) => {
            num = Math.round(`${num}e${dec}`);
            return Number(`${num}e${-dec}`);
        }
        const linearize = (c) => {
            return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        }
        const calcHue = (r, g, b) => {
            let max, min, d, h;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            d = max - min;
            h = 0;
            if (d != 0 && max == r && g >= b)
                h = 60 * ((g - b) / d) + 0;
            else if (d != 0 && max == r && g < b)
                h = 60 * (((g - b) / d) + 6);
            else if (d != 0 && max == g)
                h = 60 * (((b - r) / d) + 2);
            else if (d != 0 && max == b)
                h = 60 * (((r - g) / d) + 4);
            return h;
        }
        const rgbToHsl = (r, g, b, dec = 0) => {
            let max, min, l, d, s, h;
            [r, g, b] = normalize(r, g, b);
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            l = (max + min) / 2;
            d = max - min;
            h = calcHue(r, g, b);
            if(d == 0)
                s = 0;
            else 
                s = d / ( 1 - Math.abs(2 * l - 1 ));
            h = Math.toRound(h, dec);
            s = Math.toRound(s * 100, dec);
            l = Math.toRound(l * 100, dec);
            return [h, s, l];
        }
        const rgbToHwb = (r, g, b, dec = 0) => {
            let max, min, w, k;
            [r, g, b] = normalize(r, g, b);
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            w = min;
            k = 1 - max;
            h = calcHue(r, g, b);
            h = toRound(h, dec);
            w = toRound(w * 100, dec);
            b = toRound(k * 100, dec);
            return [h, w, b];
        }
        const rgbToHsv = (r, g, b, dec = 0) => {
            let max, min, d, v, h, s;
            [r, g, b] = normalize(r, g, b);
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            d = max - min;
            v = max;
            h = calcHue(r, g, b);
            if (d == 0)
                s = 0;
            else
                s = d / max;
           h = toRound(h, dec);
           s = toRound(s * 100, dec);
           v = toRound(v * 100, dec);
           return [h, s, v];
        }
        const rgbToCmyk = (r, g, b, dec = 0) => {
            let k, c, m, y;
            [r, g, b] = normalize(r, g, b);
            k = 1 - Math.max(r, g, b);
            c = (1 - r - k) / (1 - k);
            m = (1 - g - k) / (1 - k);
            y = (1 - b - k) / (1 - k);
            c = toRound(c * 100, dec);
            m = toRound(m * 100, dec);
            y = toRound(y * 100, dec);
            k = toRound(k * 100, dec);
            return [c, m, y, k];
        }
        const rgbToNcol = (r, g, b, dec = 0) => {
            let h, w, ncol;
            [h, w, b] = rgbToHwb(r, g, b, 8);
            h = h >= 360 ? h - 360 : h;
            if (h < 60) 
                ncol = `R${toRound(h / 0.6, dec)}`;
            else if (h < 120)
                ncol = `Y${toRound((h - 60) / 0.6, dec)}`;
            else if (h < 180)
                ncol = `G${toRound((h - 120) / 0.6, dec)}`;
            else if (h < 240)
                ncol = `C${toRound((h - 180) / 0.6, dec)}`;
            else if (h < 300)
                ncol = `B${toRound((h - 240) / 0.6, dec)}`;
            else if (h < 360)
                ncol = `M${toRound((h - 300) / 0.6, dec)}`;
            w = toRound(w, dec);
            b = toRound(b, dec);
            return [ncol, w, b];
        }
        const rgbToXYZ = (r, g, b, dec = 2) => {
            let x, y, z;
            [r, g, b] = normalize(r, g, b, 8);
            r = linearize(r);
            g = linearize(g);
            b = linearize(b);
            x = r * 0.4124 + g * 0.3576 + b * 0.1805;
            y = r * 0.2126 + g * 0.7152 + b * 0.0722;
            z = r * 0.0193 + g * 0.1192 + b * 0.9505;
            x = toRound(x, dec);
            y = toRound(y, dec);
            z = toRound(z, dec);
            return [x, y, z];
        }
        const rgbToLab = (r, g, b, dec = 2) => {
            let l, a, x, y, z;
            [r, g, b] = rgbToXYZ(r, g, b, 8);
            r = r / 0.95047;
            g = g / 1.00000;
            b = b / 1.08883;
            x = (r > 0.008856) ? Math.pow(r, (1 / 3)) : (7.787 * r + 16/116);
            y = (g > 0.008856) ? Math.pow(g, (1 / 3)) : (7.787 * g + 16/116);
            z = (b > 0.008856) ? Math.pow(b, (1 / 3)) : (7.787 * b + 16/116);
            l = (116 * y) - 16;
            a = 500 * (x - y);
            b = 200 * (y - z);
            l = toRound(l, dec);
            a = toRound(a, dec);
            b = toRound(b, dec);
            return [l, a, b];
        }
        const rgbToxyY = (r, g, b, dec = 2) => {
            let [X, Y, Z] = rgbToXYZ(r, g, b, 8), x, y;
            x = X / (X + Y + Z + 0.00001);
            y = Y / (X + Y + Z + 0.00001);
            x = toRound(x, dec);
            y = toRound(y, dec);
            Y = toRound(Y, dec);
            return [x, y, Y];
        }
        const rgbToLch = (r, g, b, dec = 0) => {
            let c, h;
            [l, a, b] = rgbToLab(r, g, b, 8);
            c = Math.sqrt(a*a + b*b);
            h = Math.atan2(b, a);
            h = h * (180 / Math.PI);
            if (h < 0)
              h = h + 360;
            l = toRound(l, dec);
            c = toRound(c, dec);
            h = toRound(h, dec);
            return [l, c, h];
        }
        const getColorCode = (value, dec = 0) => {
            let formatValue = "";
            for (let i = 0; i < ral.length; i++){
                let ralKey = ral[i][0];
                let ralValue = ral[i][1];
                let h, s, l, w, c, m, y, k, v, ncol, a;
                if (ralKey === value){
                    [r, g, b] = hex2rgb(ralValue, dec);
                    if (colorspace.toLowerCase() == 'rgb'){
                        formatValue = `rgb(${r} ${g} ${b})`;
                    }
                    else if (colorspace.toLowerCase() == 'hsl'){
                        [h, s, l] = rgbToHsl(r, g, b, dec);
                        formatValue = `hsl(${h}deg ${s}% ${l}%)`;
                    }
                    else if (colorspace.toLowerCase() == 'hwb'){
                        [h, w, b] = rgbToHwb(r, g, b, dec);
                        formatValue = `hwb(${h}deg ${w}% ${b}%)`;
                    }
                    else if (colorspace.toLowerCase() == 'cmyk'){
                        [c, m, y, k] = rgbToCmyk(r, g, b, dec);
                        formatValue = `device-cmyk(${c}% ${m}% ${y}% ${k}%)`;
                    }
                    else if (colorspace.toLowerCase() == 'ncol'){
                        [ncol, w, b] = rgbToNcol(r, g, b, dec);
                        formatValue = `ncol(${ncol}, ${w}%, ${b}%)`;
                    }
                    else if (colorspace.toLowerCase() == 'hsv'){
                        [h, s, v] = rgbToHsv(r, g, b, dec);
                        formatValue = `hsv(${h}deg ${s}% ${v}%)`;
                    }
                    else if (colorspace.toLowerCase() == 'lab'){
                        [l, a, b] = rgbToLab(r, g, b, dec);
                        formatValue = `lab(${l}% ${a} ${b})`;
                    }
                    else if (colorspace.toLowerCase() == 'lch'){
                        [l, c, h] = rgbToLch(r, g, b, dec);
                        formatValue = `lch(${l}% ${c} ${h})`;
                    }
                    else if (colorspace.toLowerCase() == 'xyz'){
                        [x, y, z] = rgbToXYZ(r, g, b, dec);
                        formatValue = `XYZ(${x} ${y} ${z})`;
                    }
                    else if (colorspace.toLowerCase() == 'xyy'){
                        [x, y, Y] = rgbToxyY(r, g, b, dec);
                        formatValue = `xyY(${x} ${y} ${Y})`;
                    }
                    else{
                        formatValue = ralValue;
                    }
                value = value.replace(new RegExp(ralKey, 'g'), formatValue);
                return value;
                }
            }
        }
        this.each(function(e){
            let result = {};
            for (const [key, value] of Object.entries(arg)) {
                let newValue = getColorCode(value, dec);
                result[key] = newValue;
            }
            $(this).css(result);
        });
    };
})(jQuery);
