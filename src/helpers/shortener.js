function shortener(input){
    if(input.length > 100){
        input.slice(0,100).split(' ').slice(0, -1).join(' ')
        return input;
    }
    else return input;
}

export default shortener;
