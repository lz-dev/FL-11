let ax = parseFloat(prompt('Enter X of point A:', ''));
let ay = parseFloat(prompt('Enter Y of point A:', ''));
let bx = parseFloat(prompt('Enter X of point B:', ''));
let by = parseFloat(prompt('Enter Y of point B:', ''));
let cx = parseFloat(prompt('Enter X of point C:', ''));
let cy = parseFloat(prompt('Enter Y of point C:', ''));

if (isNaN(ax) || isNaN(ay) || isNaN(bx) || isNaN(by) || isNaN(cx) || isNaN(cy)) {
    console.log('Incorrect input')
} else {
    const half = 2;                                                                                            
    let res = (ax + bx) / half === cx && (ay + by) / half === cy;
    console.log(res)
}