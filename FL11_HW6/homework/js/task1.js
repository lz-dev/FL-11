let ax = parseInt(prompt('Enter X of point A:', ''));
let ay = parseInt(prompt('Enter Y of point A:', ''));
let bx = parseInt(prompt('Enter X of point B:', ''));
let by = parseInt(prompt('Enter Y of point B:', ''));
let cx = parseInt(prompt('Enter X of point C:', ''));
let cy = parseInt(prompt('Enter Y of point C:', ''));

if (isNaN(ax) || isNaN(ay) || isNaN(bx) || isNaN(by) || isNaN(cx) || isNaN(cy)) {
    console.log('Incorrect input')
} else {
    const half = 2;                                                                                            
    let res = (ax + bx) / half === cx && (ay + by) / half === cy;
    console.log(res)
}