function fun(a,b,...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Eden'));
}
fun('Ronaldo', 'Neymar', 'Messi','Eden');