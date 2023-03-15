"use strict";

let a = "background-color: # 00ffff; color: # ff00ff;"
a += "font-size: 24pt; font-family: 'Times New Roman'"
let da = new Date ()
let d = da.getDate () + "." + (da.getMonth () + 1) + "." + da.getFullYear ()
document.write ( '<P align = center style = "' + a + '">' +
 '</P> <P> Сьогодні ' + d + '</P>')
