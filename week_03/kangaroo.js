function kangaroo(x1,v1,x2,v2) {
    // if kangaroo2 is ahead(x2 > x1) of kangaroo1 and moves faster (v2 > v1), never match
    if (x2 > x1 && v2 > v1) return "NO";

    // if equations are not diverging
    // use both equations as linear equations, (2x + 4 = 3x + 6)
    let x = v2 - v1
    let c = x2 - x1;
    // solve equations for divisor
    let divisor = c/x;
    // if x is integer, return yes
    return Number.isInteger(divisor) ? "YES" : "NO";
}
