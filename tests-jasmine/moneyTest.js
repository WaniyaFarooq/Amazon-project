import formatCurrency from "../scripts/utils/money.js";

 describe('test suite: formatCurrency',() => {
    it ('Converts cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('works with 0', ()=>{
   expect(formatCurrency(0)).toEqual('0.00');
    });
    it('roundup up to nearest cent', ()=>{
   expect(formatCurrency(2000.5)).toEqual('20.01');
    });
    it('roundup up to nearest dollar', ()=>{
   expect(formatCurrency(2000.05)).toEqual('20.00');
    });
    
 });