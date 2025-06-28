export function generateRangedNumber(start:number , end: number ,step: number = 1 ) : number[] {
    const Numbers: number[] = new Array() 
    for(let i :number = start ; i <= end ;  i += step  ) {
        Numbers.push(i)
    }
    return Numbers
}